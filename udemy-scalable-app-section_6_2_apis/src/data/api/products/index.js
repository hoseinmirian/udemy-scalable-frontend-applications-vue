import OopClient from "@/data/libs/OopClient";

let _OopClient;

const getProducts = async () => {
    _OopClient = new OopClient({baseURL:"http://localhost:3005/"});
    const {data} = await _OopClient.get({url:"products"});
    return data;
}

export default {
    getProducts
}