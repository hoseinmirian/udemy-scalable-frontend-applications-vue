import axios from "axios";

class OopClient {
    constructor(initOptions) {
        if (OopClient._instance && OopClient._instance.baseURL === initOptions.baseURL) {
            console.log('class already exist');
            return OopClient._instance;
        }
        console.log('class created');
        OopClient._instance = this;
        const defaultHeader = {
            "Content-Type": "application/json",
        };
        let {baseURL = null, headers} = initOptions;
        if (!baseURL) {
            throw new Error("baseURL must be defined!")
        }
        this.baseURL = baseURL;
        this.headers = headers || defaultHeader;
    }

    runQueries(request) {
        try {
            return axios(request);
        } catch (error) {
            return {data: {error: error}}
        }
    }

    async create(config) {
        const request = {
            headers: this.headers,
            baseURL: this.baseURL,
            method: "POST",
            ...config
        }
        return await this.runQueries(request);
    }

    async delete(config) {
        const request = {
            headers: this.headers,
            baseURL: this.baseURL,
            method: "DELETE",
            ...config
        }
        return await this.runQueries(request);
    }

    async update(config) {
        const request = {
            headers: this.headers,
            baseURL: this.baseURL,
            method: "UPDATE",
            ...config
        }
        return await this.runQueries(request);
    }

    async patch(config) {
        const request = {
            headers: this.headers,
            baseURL: this.baseURL,
            method: "PATCH",
            ...config
        }
        return await this.runQueries(request);
    }

    async get(config) {
        const request = {
            headers: this.headers,
            baseURL: this.baseURL,
            method: "GET",
            ...config
        }
        return await this.runQueries(request);
    }

}

export default OopClient;