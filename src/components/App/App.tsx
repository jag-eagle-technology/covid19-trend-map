import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import axios from 'axios';

import {
    updateTooltipData,
    tooltipDataChanged,
    tooltipPositionChanged,
    isStateLayerVisilbeToggled,
} from '../../store/reducers/Map';

import {
    queryCountyData,
    queryStateData,
} from '../../store/reducers/Covid19Data';

import About from '../About/About';
import MapView from '../MapView/MapView';
import Tooltip from '../Tooltip/Tooltip';
import BottomPanel from '../BottomPanel/BottomPanel';
import ControlPanel from '../ControlPanel/ControlPanel';
import QueryTaskLayer from '../QueryTaskLayer/QueryTaskLayer';
import Covid19TrendLayer from '../Covid19TrendLayer/Covid19TrendLayer';
import QueryTaskResultLayer from '../QueryTaskResultLayer/QueryTaskResultLayer';

import {
    Covid19TrendDataQueryResponse,
    Covid19LatestNumbers,
} from 'covid19-trend-map';

import AppConfig from '../../AppConfig';

import { getModifiedTime } from '../../utils/getModifiedDate';

type Props = {
    covid19USCountiesData: Covid19TrendDataQueryResponse;
    covid19USStatesData: Covid19TrendDataQueryResponse;
    covid19LatestNumbers: Covid19LatestNumbers;
};

const App: React.FC<Props> = ({
    covid19USCountiesData,
    covid19USStatesData,
    covid19LatestNumbers,
}: Props) => {
    const dispatch = useDispatch();

    return (
        <>
            <MapView webmapId={AppConfig['webmap-id']}>
                <QueryTaskResultLayer />

                <Covid19TrendLayer
                    key="US-Counties"
                    data={covid19USCountiesData}
                    hasTrendCategoriesAttribute={true}
                    visibleScale={AppConfig['us-counties-layer-visible-scale']}
                />

                <Covid19TrendLayer
                    key="US-States"
                    data={covid19USStatesData}
                    visibleScale={AppConfig['us-states-layer-visible-scale']}
                    isLayerInVisibleScaleOnChange={(isVisible) => {
                        // setIsStateLayerVisible(isVisible);
                        dispatch(isStateLayerVisilbeToggled(isVisible));

                        // hide tooltip to prevent showing the data from different layer which is no longer visible
                        // setTooltipData(undefined);
                        dispatch(tooltipDataChanged(undefined));
                    }}
                />

                <QueryTaskLayer
                    key="query-4-US-Counties"
                    url={AppConfig['us-counties-feature-layer-item-url']}
                    outFields={['FIPS', 'NAME', 'STATE_NAME']}
                    visibleScale={AppConfig['us-counties-layer-visible-scale']}
                    onSelect={(feature) => {
                        const featureJSON = feature
                            ? feature.toJSON()
                            : undefined;
                        dispatch(queryCountyData(featureJSON));
                    }}
                    pointerOnMove={(position) => {
                        dispatch(tooltipPositionChanged(position));
                    }}
                    featureOnHover={(feature) => {
                        const locationName = feature
                            ? `${feature.attributes['NAME']}, ${feature.attributes['STATE_NAME']}`
                            : undefined;

                        const FIPS = feature
                            ? feature.attributes['FIPS']
                            : undefined;

                        const tooltipData = covid19LatestNumbers[FIPS];

                        dispatch(updateTooltipData(locationName, tooltipData));
                    }}
                />

                <QueryTaskLayer
                    key="query-4-US-States"
                    url={AppConfig['us-states-feature-layer-item-url']}
                    outFields={['STATE_NAME', 'STATE_FIPS']}
                    visibleScale={AppConfig['us-states-layer-visible-scale']}
                    onSelect={(feature) => {
                        const featureJSON = feature
                            ? feature.toJSON()
                            : undefined;
                        dispatch(queryStateData(featureJSON));
                    }}
                    pointerOnMove={(position) => {
                        dispatch(tooltipPositionChanged(position));
                    }}
                    featureOnHover={(feature) => {
                        const locationName = feature
                            ? `${feature.attributes['STATE_NAME']}`
                            : undefined;

                        const FIPS = feature
                            ? feature.attributes['STATE_FIPS']
                            : undefined;

                        const tooltipData = covid19LatestNumbers[FIPS];

                        dispatch(updateTooltipData(locationName, tooltipData));
                    }}
                />
            </MapView>

            <ControlPanel />

            <BottomPanel />

            <Tooltip />

            <About
                ymax4confirmed={covid19USStatesData.frames.confirmed.ymax}
                ymax4deaths={covid19USStatesData.frames.deaths.ymax}
            />
        </>
    );
};

const AppContainer = (): JSX.Element => {
    const [covid19USCountiesData, setCovid19USCountiesData] = useState<
        Covid19TrendDataQueryResponse
    >();
    const [covid19USStatesData, setCovid19USStatesData] = useState<
        Covid19TrendDataQueryResponse
    >();
    const [covid19LatestNumbers, setCovid19LatestNumbers] = useState<
        Covid19LatestNumbers
    >();

    const fetchData = async () => {
        const modified = getModifiedTime();

        try {
            const HostUrl = AppConfig['static-files-host'];
            const Url4CountiesJSON = `${HostUrl}${AppConfig['covid19-data-us-counties-json']}?modified=${modified}`;
            const Url4StatesJSON = `${HostUrl}${AppConfig['covid19-data-us-states-json']}?modified=${modified}`;
            const Url4LatestNumbers = `${HostUrl}${AppConfig['covid19-latest-numbers-json']}?modified=${modified}`;

            const queryResUSStates = await axios.get<
                Covid19TrendDataQueryResponse
            >(Url4StatesJSON);
            setCovid19USStatesData(queryResUSStates.data);
            // console.log(queryResUSStates)

            const queryResUSCounties = await axios.get<
                Covid19TrendDataQueryResponse
            >(Url4CountiesJSON);
            setCovid19USCountiesData(queryResUSCounties.data);
            // console.log(queryResUSCounties)

            const queryResLatestNumbers = await axios.get<Covid19LatestNumbers>(
                Url4LatestNumbers
            );
            setCovid19LatestNumbers(queryResLatestNumbers.data);
            // dispatch(latestNumbersLoaded(queryResLatestNumbers.data));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return covid19USCountiesData &&
        covid19USStatesData &&
        covid19LatestNumbers ? (
        <App
            covid19USCountiesData={covid19USCountiesData}
            covid19USStatesData={covid19USStatesData}
            covid19LatestNumbers={covid19LatestNumbers}
        />
    ) : null;
};

export default AppContainer;
