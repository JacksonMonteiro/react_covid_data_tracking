import axios from "axios";

const https = axios.create({
    baseURL: 'https://disease.sh/v3/covid-19'
});

export const Api = {
    getWorldData: async () => {
        let response = await https.get('/all');
        return response.data;
    },

    getMapDapa: async() => {
        let response = await https.get('/countries');
        return response.data;
    },

    getHistorical: async() => {
        let response = await https.get('/historical/all?lastdays=7');
        return response.data;
    }
}