import OopClient from "@/data/libs/OopClient";

let _OopClient;

const getReviews = async () => {
    _OopClient = new OopClient({baseURL:"http://localhost:3005/"});
    const {data} = await _OopClient.get({url:"reviews"});
    return data;
}

export default {
    getReviews
}