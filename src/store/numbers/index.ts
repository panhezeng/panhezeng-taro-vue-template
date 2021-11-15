import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { StateType as StateTypeIndex } from "src/store/index";

export const names = {
  module: "numbers",
  getters: {
    GET_NUMBER: "GET_NUMBER",
  },
  mutations: {
    ADD_NUMBER: "ADD_NUMBER",
  },
  actions: {
    ADD_NUMBER: "ADD_NUMBER",
  },
};

const initState = {
  numbers: [1, 2, 3],
};
export type StateType = typeof initState;

const getters: GetterTree<StateType, StateTypeIndex> = {
  /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
  [names.getters.GET_NUMBER](state, getters, rootState, rootGetters) {
    /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
    // your code
    return state.numbers;
  },
};
const mutations: MutationTree<StateType> = {
  /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
  [names.mutations.ADD_NUMBER](state, payload: number) {
    /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
    // your code
    state.numbers.push(payload);
  },
};
const actions: ActionTree<StateType, StateTypeIndex> = {
  /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
  [names.actions.ADD_NUMBER](context, payload: number) {
    /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
    // your code
    context.commit("ADD_NUMBER", payload);
  },
};

export default {
  namespaced: true,
  state: () => JSON.parse(JSON.stringify(initState)),
  getters,
  mutations,
  actions,
} as Module<StateType, StateTypeIndex>;
