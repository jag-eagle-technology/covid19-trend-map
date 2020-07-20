import React, {
    useEffect,
    useState
} from 'react';

import { loadModules } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import ICIMSymbol from 'esri/symbols/CIMSymbol';
import IGraphic from 'esri/Graphic';
import IPoint from 'esri/geometry/Point';
import IGraphicsLayer from 'esri/layers/GraphicsLayer';

import {
    TrendData,
    Covid19USCountyTrendData,
    Covid19USStateTrendData
} from 'covid19-trend-map'

type Props = {
    activeTrendData: TrendData;
    data: Covid19USCountyTrendData[] | Covid19USStateTrendData[];
    visibleScale?: {
        min: number;
        max: number;
    }
    mapView?:IMapView;
}

const Covid19TrendLayer:React.FC<Props> = ({
    activeTrendData,
    data,
    visibleScale,
    mapView
}) => {

    const [ trendLayer, setTrendLayer ] = useState<IGraphicsLayer>();

    const init = async()=>{
        type Modules = [
            typeof IGraphicsLayer
        ];

        try {
            const [ 
                GraphicsLayer,
            ] = await (loadModules([
                'esri/layers/GraphicsLayer',
            ]) as Promise<Modules>);

            const layer = new GraphicsLayer({
                minScale: visibleScale && visibleScale.min,
                maxScale: visibleScale && visibleScale.max
            });

            mapView.map.add(layer);

            setTrendLayer(layer);

        } catch(err){
            console.error(err);
        }
    };

    const draw = async()=>{

        type Modules = [
            typeof ICIMSymbol,
            typeof IGraphic,
            typeof IPoint
        ];

        try {
            const [ 
                CIMSymbol,
                Graphic,
                Point
            ] = await (loadModules([
                'esri/symbols/CIMSymbol',
                'esri/Graphic',
                'esri/geometry/Point'
            ]) as Promise<Modules>);

            trendLayer.removeAll();

            // Iterate over each feature
            for (const feature of data) {

                const {
                    attributes,
                    geometry,
                    confirmed,
                    deaths,
                    newCases
                } = feature;

                const numbersByTrendName: { [key in TrendData]: number[] } = {
                    'confirmed': confirmed,
                    'death': deaths,
                    'new-cases': newCases
                };

                const values = numbersByTrendName[activeTrendData] || newCases;

                const path = values.map((val, idx)=>[ idx, val ]);
                const numOfDays = values.length;
                const size = 20;

                // Normalize the graph:
                //  - Grab the min/max values of y
                let ymax = path.reduce((prev, curr) => Math.max(prev, curr[1]), Number.NEGATIVE_INFINITY);
                let ymin = path.reduce((prev, curr) => Math.min(prev, curr[1]), Infinity);
                // console.log(ymin, ymax)

                // If values are between 0 and 14, do nothing
                // 14 is the size of the graph in x (14 days)
                if (
                    (ymax - ymin) < numOfDays && 
                    (ymax - ymin) > 0
                ){
                    ymax = numOfDays;
                    ymin = 0;
                } 
                else if ((ymax - ymin) >= numOfDays) {
                    // normalize the graph otherwise
                    // by normalizing the y values
                    const ratio = Math.floor((numOfDays / (ymax - ymin)) * 1000) / 1000;
                    // console.log(ratio)

                    path.forEach((p) => {
                        p[1] = p[1] * ratio;
                    });
                    
                    ymax = Math.ceil(ymax * ratio);
                    ymin = 0
                }

                // Create the CIM symbol:
                //  - set the size value
                //  - assign the generated path to the marker's geometry
                const symbol = new CIMSymbol({
                    data: {
                        type: 'CIMSymbolReference',
                        symbol: {
                            type: "CIMPointSymbol",
                            symbolLayers: [
                                {
                                    type: "CIMVectorMarker",
                                    enable: true,
                                    scaleSymbolsProportionally: false,
                                    respectFrame: false,
                                    size,
                                    frame: {
                                        xmin: 0,
                                        ymin,
                                        xmax: numOfDays,
                                        ymax
                                    },
                                    markerGraphics: [{
                                        type: "CIMMarkerGraphic",
                                        geometry: {
                                            paths: [path]
                                        },
                                        symbol: {
                                            type: "CIMLineSymbol",
                                            symbolLayers: [{
                                                type: "CIMSolidStroke",
                                                width: 1,
                                                color: [161, 13, 34, 255]
                                            }]
                                        }
                                    }]
                                }
                            ]
                        }
                    }
                });

                const graphic = new Graphic({
                    geometry: new Point({
                        latitude: geometry.y,
                        longitude: geometry.x
                    }),
                    symbol
                })

                // Add the symbol on the county's centroid
                trendLayer.add(graphic);
            }

        } catch(err){   
            console.error(err);
        }
    };

    useEffect(()=>{
        if(mapView){
            init();
        }
    }, [mapView]);

    useEffect(()=>{
        if(trendLayer && data){
            draw();
        }
    }, [trendLayer, data, activeTrendData]);

    return null;
}

// const Covid19TrendLayerContainer: React.FC<Props> = ({
//     activeTrendData,
//     data,
//     mapView
// })=>{

//     const getValuesToRender = ()=>{

//     }

//     return null;
// }

export default Covid19TrendLayer
