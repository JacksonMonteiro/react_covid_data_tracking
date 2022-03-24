import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Api } from '../../api';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const CasesHistoricalChart = () => {
    const [labels, setLabels] = useState<string[]>([]);
    const [cases, setCases] = useState<number[]>([]);

    useEffect(() => {
        getHistorical();
    }, []);

    const getHistorical = async () => {
        let json = await Api.getHistorical();
        let labelsArr : string[] = [];
        let casesArr : number[] = [];

        for (let i in json['cases']) {
            labelsArr.push(i);
        }

        for (let i in json['cases']) {
            casesArr.push(json['cases'][i]);
        }

        setLabels(labelsArr);
        setCases(casesArr);
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Histórico de casos de Covid-19',
            },
        },
        SVGPreserveAspectRatio: true,
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Casos',
                data: cases,
                borderColor: '#ee9b00',
                backgroundColor: '#ee9b00',
            },
        ],
    };

    return (
        <Line options={options} data={data} />
    )
}