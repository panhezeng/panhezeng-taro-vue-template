import { ActionTree, Module, MutationTree } from "vuex";
import { StateType as StateTypeIndex } from "src/store/index";

export const names = {
  module: "userInfo",
  mutations: {
    SET_USER_INFO: "SET_USER_INFO",
  },
  actions: {
    LOGIN: "LOGIN",
  },
};

export type UserProfileType = {
  encryptedData: string;
  iv: string;
};

const initState = {
  token: "",
};
export type StateType = typeof initState;

const mutations: MutationTree<StateType> = {
  /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
  [names.mutations.SET_USER_INFO](state, payload: Partial<StateType>) {
    /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
    Object.assign(state, payload);
  },
};
const actions: ActionTree<StateType, StateTypeIndex> = {
  /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
  async [names.actions.LOGIN](context, payload?: any) {
    /* eslint-disable @typescript-eslint/no-unused-vars,no-unused-vars */
    // your code
  },
};

export default {
  namespaced: true,
  state: () => JSON.parse(JSON.stringify(initState)),
  mutations,
  actions,
} as Module<StateType, StateTypeIndex>;
