import * as C from './styles';
import { Api } from '../../api';
import { useState, useEffect } from 'react';

export const DataContainer = () => {
    const [cases, setCases] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [recovered, setRecovered] = useState(0);

    const setData = async () => {
        let json = await Api.getWorldData();
        setCases(json['cases']);
        setDeaths(json['deaths']);
        setRecovered(json['recovered']);
    }

    useEffect(() => {
        setData();
    }, []);

    return (

        <C.ContainerCase>
            <C.CasesContainer>
                <h3>Casos registrados: </h3>
                <h1>{cases.toLocaleString('pt-BR')}</h1>
                <p>Ao redor do mundo</p>
            </C.CasesContainer>
            <C.DeathContainer>
                <h3>Mortes Registradas: </h3>
                <h1>{(deaths).toLocaleString('pt-BR')}</h1>
                <p>Ao redor do mundo</p>
            </C.DeathContainer>
            <C.RecoveredContainer>
                <h3>Casos registrados: </h3>
                <h1>{(recovered).toLocaleString('pt-BR')}</h1>
                <p>Ao redor do mundo</p>
            </C.RecoveredContainer>
        </C.ContainerCase>

    );
}