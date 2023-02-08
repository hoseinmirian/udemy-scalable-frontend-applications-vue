import api from "@/data/api";

const appSchema = {
    namespaced: true,
    state() {
        return {
            appSchema: {}
        }
    },
    mutations: {
        SET_APP_SCHEMA(state, payload) {
            state.appSchema = payload;
        }
    },
    actions: {
        async setAppSchema({commit}) {
            const appSchema = await api.appSchema.getAll();
            commit("SET_APP_SCHEMA", appSchema);
        }
    },
    getters: {
        getHomePageComponentsSchema(state) {
            return state.appSchema.pages[0].components
        },
        getAppHeaderComponents(state) {
            return state.appSchema.header.components;
        },
        getAppFooterComponents(state) {
            return state.appSchema.footer.components;
        }
    }
}

export default appSchema;