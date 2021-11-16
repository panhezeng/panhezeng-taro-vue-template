import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { StateType as StateTypeIndex } from "src/store/index";

export const names = {
  module: "exampleModule",
  getters: {
    SOME_GETTER: "SOME_GETTER",
  },
  mutations: {
    SOME_MUTATION: "SOME_MUTATION",
  },
  actions: {
    SOME_ACTION: "SOME_ACTION",
  },
};

const initState = {
  example: "example",
  exampleArray: [] as any[],
  exampleObject: {} as { [key: string]: any },
};
export type StateType = typeof initState;

const getters: GetterTree<StateType, StateTypeIndex> = {
  /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
  [names.getters.SOME_GETTER](state, getters, rootState, rootGetters) {
    /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
    // your code
  },
};
const mutations: MutationTree<StateType> = {
  /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
  [names.mutations.SOME_MUTATION](state, payload?: any) {
    /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
    // your code
  },
};
const actions: ActionTree<StateType, StateTypeIndex> = {
  /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
  async [names.actions.SOME_ACTION](context, payload?: any) {
    /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
    // your code
  },
};

export default {
  namespaced: true,
  state: () => JSON.parse(JSON.stringify(initState)),
  getters,
  mutations,
  actions,
} as Module<StateType, StateTypeIndex>;
