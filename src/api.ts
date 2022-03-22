import axios from "axios";

const https = axios.create({
    baseURL: 'https://disease.sh/v3/covid-19'
});

export const Api = {
    getWorldData: async () => {
        let response = await https.get('/all');
        return response.data;
    }
}