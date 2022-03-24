import * as C from './styles';
import { Api } from '../../api';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const MobileDataContainer = () => {
    const [cases, setCases] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [recovered, setRecovered] = useState(0);

    useEffect(() => {
        setData();
    }, []);

    const setData = async () => {
        let json = await Api.getWorldData();
        setCases(json['cases']);
        setDeaths(json['deaths']);
        setRecovered(json['recovered']);
    }

    return (
        <C.ContainerCase>
            <Swiper spaceBetween={20} slidesPerView={1}>
                <SwiperSlide>
                    <C.CasesContainer>
                        <h3>Casos registrados: </h3>
                        <h1>{cases.toLocaleString('pt-BR')}</h1>
                        <p>Ao redor do mundo</p>
                    </C.CasesContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <C.DeathContainer>
                        <h3>Mortes Registradas: </h3>
                        <h1>{(deaths).toLocaleString('pt-BR')}</h1>
                        <p>Ao redor do mundo</p>
                    </C.DeathContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <C.RecoveredContainer>
                        <h3>Recuperados registrados: </h3>
                        <h1>{(recovered).toLocaleString('pt-BR')}</h1>
                        <p>Ao redor do mundo</p>
                    </C.RecoveredContainer>
                </SwiperSlide>
            </Swiper>
        </C.ContainerCase>
    );
}