import * as C from './styles';

import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { DataContainer } from "./components/DataContainer";
import MapChart from "./components/Map";
import { CasesHistoricalChart } from './components/CasesHistoricalChart';
import { DeathsHistoricalChart } from './components/DeathsHistoricalChart';
import { MobileDataContainer } from './components/MobileDataContainer';

const App = () => {
    const [content, setContent] = useState('');

    return (
        <div>
            <DataContainer />
            <MobileDataContainer />
            <C.Container>
                <C.CBox>
                    <MapChart setTooltipContent={setContent} />
                    <ReactTooltip html={true} >{content}</ReactTooltip>
                </C.CBox>
                <C.ChartBox>
                    <CasesHistoricalChart />
                    <DeathsHistoricalChart />
                </C.ChartBox>
            </C.Container>
        </div>
    );
}

export default App;
