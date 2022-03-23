import * as C from './styles';

import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { DataContainer } from "./components/DataContainer";
import MapChart from "./components/Map";

const App = () => {
    const [content, setContent] = useState('');

    return (
        <div>
            <DataContainer />
            <C.Container>
                <C.CBox>
                    <MapChart setTooltipContent={setContent} />
                </C.CBox>
                <ReactTooltip html={true}>{content}</ReactTooltip>
            </C.Container>
        </div>
    );
}

export default App;
