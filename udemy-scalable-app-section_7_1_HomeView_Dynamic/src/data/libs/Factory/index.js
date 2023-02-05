// createOne() => post to /url & pass body to create or post some data
// getAll()    => get to /url & config:{params:{},headers:{},etc} to get all data
// getOne()    => get to /url/:id & config:{params:{},headers:{},etc} to get one data by ID
// updateOne() => patch to /url/:id & config:{params:{},headers:{},etc} to update one data by ID
// deleteOne() => delete to /url/:id to delete one data by ID
// deleteAll() => delete to /url to delete all data

import OopClient from "@/data/libs/OopClient";

const baseURL = "http://localhost:3005/";

const createOne = async (model, config) => {
    const _OopClient = new OopClient({baseURL});
    const _config = {
        url: model,
        ...config
    }
    const {data} = await _OopClient.create(_config);
    return data;
}

const getAll = async (model, config) => {
    const _OopClient = new OopClient({baseURL});
    const _config = {
        url: model,
        ...config
    }
    const {data} = await _OopClient.get(_config);
    return data;
}

const getOne = async (model, id, config) => {
    const _OopClient = new OopClient({baseURL});
    const _config = {
        url: `${model}/${id}`,
        ...config
    }
    const {data} = await _OopClient.get(_config);
    return data;
}


const updateOne = async (model, id, config) => {
    const _OopClient = new OopClient({baseURL});
    const _config = {
        url: `${model}/${id}`,
        ...config
    }
    const {data} = await _OopClient.patch(_config);
    return data;
}


const deleteOne = async (model, id, config) => {
    const _OopClient = new OopClient({baseURL});
    const _config = {
        url: `${model}/${id}`,
        ...config
    }
    const {data} = _OopClient.patch(_config);
    return data;
}

export default {createOne, getAll, getOne, updateOne, deleteOne}