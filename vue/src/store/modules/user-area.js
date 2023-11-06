import api from "@/api/api"

export default {
    namespaced: true,
    state() {
        return {
            // 用户列表
            source: new Array(),
            page: 1,
            pageSize: 15,
            // other
            dataReady: false,
            userTotal: 0,
        }
    },
    getters: {
        // 获取 - 用户列表
        getSource(state) {
            return state.source
        }
    },
    mutations: {
        // 修改 - 用户列表
        setSource(state, payload) {
            state.source = payload
        }
    },
    actions: {
        // 请求 - 用户列表
        async fetchSource({ state }) {
            const { data } = await api.get(`/api/user?page=${state.page}&pageSize=${state.pageSize}`, {
                token: "eyJwYXJhbXMiOnsicGhvbmUiOiIxMjM0NTY3ODkwMCIsImhhc2giOiIyNDBiZTUxOGZhYmQyNzI0ZGRiNmYwNGVlYjFkYTU5Njc0NDhkN2U4MzFjMDhjOGZhODIyODA5Zjc0YzcyMGE5In0sInNpZ24iOiJjYXJzYWxlIiwiaWF0IjoxNjk5MjQwMjk4LCJleHAiOjE3MDE4MzIyOTh9"
            })
            return data
        }
    }
}