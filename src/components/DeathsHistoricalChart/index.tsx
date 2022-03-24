import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Api } from '../../api';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const DeathsHistoricalChart = () => {
    const [labels, setLabels] = useState<string[]>([]);
    const [deaths, setDeaths] = useState<number[]>([]);
    useEffect(() => {
        getHistorical();
    }, []);

    const getHistorical = async () => {
        let json = await Api.getHistorical();
        let labelsArr : string[] = [];
        let deathsArr : number[] = [];

        for (let i in json['deaths']) {
            labelsArr.push(i);
        }

        for (let i in json['deaths']) {
            deathsArr.push(json['deaths'][i]);
        }

        setLabels(labelsArr);
        setDeaths(deathsArr);
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Histórico de mortes por Covid-19',
            },
        },
        SVGPreserveAspectRatio: true,
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Casos',
                data: deaths,
                borderColor: '#d62828',
                backgroundColor: '#d62828',
            },
            
        ],
    };

    return (
        <Line options={options} data={data} />
    )
}