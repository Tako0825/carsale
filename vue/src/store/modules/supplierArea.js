import api from "@/api/api"

export default {
    namespaced: true,
    state() {
        return {
            // 供应商相关配置
            source: new Array(),
            supplierTotal: 0,
            supplier: null,
            // 分页相关配置
            page: 1,
            pageSize: 10,
            // 状态相关配置
            dataReady: false,
            dialogEditVisible: false,
            dialogFormVisible: false,
        }
    },
    getters: {
        getSource: state => state.source,
        getSupplierTotal: state => state.supplierTotal,
        getSupplier: state => state.supplier,
        getPage: state => state.page,
        getPageSize: state => state.pageSize,
        getDataReady: state => state.dataReady,
        getDialogEditVisible: state => state.dialogEditVisible,
        getDialogFormVisible: state => state.dialogFormVisible,
    },
    mutations: {
        setSource: (state, payload) => { state.source = payload },
        setSupplierTotal: (state, payload) => { state.supplierTotal = payload },
        setSupplier: (state, payload) => { state.supplier = payload },
        setPage: (state, payload) => { state.page = payload },
        setPageSize: (state, payload) => { state.pageSize = payload },
        setDataReady: (state, payload) => { state.dataReady = payload },
        setDialogEditVisible: (state, payload) => { state.dialogEditVisible = payload },
        setDialogFormVisible: (state, payload) => { state.dialogFormVisible = payload },
    },
    actions: {
        // 请求接口 - 分页获取供应商信息
        async fetchSource({ state, commit, rootGetters }) {   
            const response = await api.get(`/api/supplier?page=${state.page}&pageSize=${state.pageSize}`,{ token: rootGetters.getToken })
            commit("setSupplierTotal", response.supplierTotal)
            return response
        },
        // 请求接口 - 创建供应商
        async createSupplier({ rootGetters }, payload) {
            await api.post(`/api/rootGetters`, payload, { token: rootGetters.getToken })
        },
        // 请求接口 - 获取指定的供应商信息
        async fetchSupplier({ rootGetters }, payload) {
            const response = await api.get(`/api/supplier/${payload}`, { token: rootGetters.getToken })
            return response.supplier
        },
        // 请求接口 - 修改供应商信息
        async updateSupplier({ rootGetters }, payload) {
            await api.patch(`/api/supplier/${payload.id}`, payload.data, { token: rootGetters.getToken })
        },
        // 请求接口 - 删除供应商
        async deleteSupplier({ rootGetters }, payload) {
            await api.delete(`/api/supplier/${payload}`, { token: rootGetters.getToken })
        }
    }
}