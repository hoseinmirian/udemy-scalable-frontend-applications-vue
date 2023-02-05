import OopClient from "@/data/libs/OopClient";

let _OopClient;

const getUsers = async () => {
    _OopClient = new OopClient({baseURL:"http://localhost:3005/"});
    const {data} = await _OopClient.get({url:"users"});
    return data;
}

export default {
    getUsers
}