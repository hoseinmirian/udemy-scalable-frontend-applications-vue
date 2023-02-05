import OopClient from "@/data/libs/OopClient";

let _OopClient;

const getAppSchema = async () => {
    _OopClient = new OopClient({baseURL:"http://localhost:3005/"});
    const {data} = await _OopClient.get({url:"app-schema"});
    return data;
}

export default {
    getAppSchema
}