import axios from 'axios';

import * as config from './config';

export async function getHeadlines(country = "us"){
    try{
        let requests = [];
        config.categories.map((category) => {
            let url =  `${config.headlines}&country=${country}&category=${category.toLowerCase()}`;
            requests.push(axios.get(url))
        });

        let response = await Promise.all(requests);
        response.map((resp, idx) => {
            let {articles, totalResults} = resp.data;

            response[idx] = {articles, totalResults};
        });

        let [business, entertainment, general, health, science, sports, technology] = response;

        return {business, entertainment, general, health, science, sports, technology};

    }catch (e) {
        throw new Error(e);
    }
}

export async function getHeadlinesByCategory(category, page=1, country = "us"){
    try{
        const url = `${config.headlines}&category=${category}&page=${page}&country=${country}`;
        let res = await axios.get(url);

        return res.data;
    }catch (e) {
        throw new Error(e);
    }
}

export async function search(query, cancelToken){
    try{
        const url = `${c.SEARCH}&q=${query.toLowerCase()}`;
        let res = await axios.get(url, {
            cancelToken: cancelToken.token,
        });

        return res.data;

    }catch (error) {
        let err = new Error(error.message);
        err.isCancel = (axios.isCancel(error));

        throw err;
    }
}
