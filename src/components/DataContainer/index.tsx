import * as C from './styles';

export const DataContainer = () => {
    return (
        <>
            <C.ContainerCase>
                <C.CasesContainer>
                    <h3>Casos registrados: </h3>
                    <h1>{(473147749).toLocaleString('pt-BR')}</h1>
                    <p>Ao redor do mundo</p>
                </C.CasesContainer>
                <C.DeathContainer>
                    <h3>Mortes Registradas: </h3>
                    <h1>{(6107623).toLocaleString('pt-BR')}</h1>
                    <p>Ao redor do mundo</p>
                </C.DeathContainer>
                <C.RecoveredContainer>
                    <h3>Casos registrados: </h3>
                    <h1>{(409218959).toLocaleString('pt-BR')}</h1>
                    <p>Ao redor do mundo</p>
                </C.RecoveredContainer>
            </C.ContainerCase>
        </>
    );
}