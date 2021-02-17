import ErrorStatusService from '@/services/api/errorStatus.service';

const state = {
    status: []
};

const actions = {
    getErrorStatus({commit}) {
        return ErrorStatusService.getListErrorStatus().then(
            res => {
                let i = 1;
                let listStatus = [];
                res.forEach(re => {
                    let errStatus = {
                        value: i,
                        text: re.errorStatusName
                    }
                    listStatus.push(errStatus);
                    i+=1;
                });
                commit("setStatus", listStatus);
                return Promise.resolve(res);
            }
        )
    }
};

const mutations = {
    setStatus(state, list) {
        state.status = list;

    }
};

export default{
    namespaced: true,
    state,
    actions,
    mutations
};