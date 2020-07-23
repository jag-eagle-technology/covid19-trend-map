import React, {
    useState
} from 'react'

import {
    TrendData,
    Covid19CasesByTimeFeature
} from 'covid19-trend-map';

import SvgContainer from './SvgContainer';
import Axis from './Axis';
import Bar from './Bars';
import Line from './Line';

import {
    max
} from 'd3';

type Props = {
    activeTrend: TrendData;
    data: Covid19CasesByTimeFeature[]
}

export type ChartDataItem = {
    x: string;
    y: number;
}

// field names for Covid19CasesByTime Features
export const FieldNameByActiveTrend:{ [ key in TrendData]: string } = {
    'new-cases': 'NewCases',
    'death': 'Deaths',
    'confirmed': 'Confirmed'
}

const ChartPanel:React.FC<Props> = ({
    activeTrend,
    data
}) => {

    const fieldName = FieldNameByActiveTrend[activeTrend];

    // if true, convert numbers from Covid19CasesByTimeFeature into number per 100K people
    const [ showNormalizedValues, setShowNormalizedValues ] = useState<boolean>(false);

    const getXDomain = ()=>{
        const xDomain = data.map(d=>d.attributes.dt);
        return xDomain
    };

    const getYDomain = ()=>{
        const values = data.map(d=>{
            return showNormalizedValues 
                ? Math.round(d.attributes[fieldName] / d.attributes.Population * 100000 )
                : d.attributes[fieldName] 
        });
        const yDomain = [ 0, max(values) ];
        return yDomain;
    }

    const getDataForBars = ():ChartDataItem[] =>{
        if(!data || !data.length){
            return [];
        }

        return data.map(d=>{

            const y = showNormalizedValues
                ? Math.round(d.attributes[fieldName] / d.attributes.Population * 100000)
                : d.attributes[fieldName] 

            return {
                x: d.attributes.dt, 
                y
            }
        });
    };

    const getDataForLine = ():ChartDataItem[] =>{
        
        if(!data || !data.length || activeTrend !== 'new-cases'){
            return [];
        }

        const values:ChartDataItem[]  = [];

        for(let i = data.length - 1; i > 0; i--){

            const feature = data[i];
            
            const x = feature.attributes.dt;

            let sum = 0;
            const startIndex = i - 6 >= 0 ? i - 6 : 0;
            const endIndex = i + 1;

            const featuresInPastWeek = data
                .slice(startIndex, endIndex);

            featuresInPastWeek.forEach(d=>sum += d.attributes[fieldName]);

            let y = (sum / featuresInPastWeek.length);

            if(showNormalizedValues){
                y = ( y / feature.attributes.Population * 100000)
            }

            y = Math.round(y);

            values.push({
                x,
                y
            })
        }

        return values;
    }

    return data && data.length ? (
        <div
            style={{
                'width': '100%',
                'height': '200px',
                'backgroundColor': 'rgba(0,0,0,0.5)'
            }}
        >
            <SvgContainer
                xDomain={getXDomain()}
                yDomain={getYDomain()}
            >

                <Axis />

                <Bar 
                    fillColor={'steelblue'}
                    data={getDataForBars()}
                />

                <Line 
                    strokeColor={'#efefef'}
                    data={getDataForLine()}
                />

            </SvgContainer>

        </div>
    
    ) : null
}

export default ChartPanel;