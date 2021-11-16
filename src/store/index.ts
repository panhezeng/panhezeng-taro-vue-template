import { InjectionKey } from "vue";

import { createStore, MutationTree, Store as VuexStore } from "vuex";

import requireContext from "@/utils/require-context";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */
export const names = {
  mutations: {
    SET_LOADING: "SET_LOADING",
  },
};
const initState = {
  loading: false,
};
export type StateType = typeof initState;

const mutations: MutationTree<StateType> = {
  [names.mutations.SET_LOADING](state, loading = true) {
    state.loading = loading;
  },
};

// 自动加载所有vuex模块，必须放在 src/store/modules 目录内，而且命名规则为 模块名.module.js
// 文件名的模块名部分，以及 module.name 都来自 src/config/vuex/types 目录内模块配置文件内导出的name
const modules = {} as any;
requireContext(
  require.context("@/store/", true, /(?<!\.\/index|\.d)\.ts$/)
).forEach(({ module }: any) => {
  if (Object.prototype.hasOwnProperty.call(module, "names")) {
    if (Object.prototype.hasOwnProperty.call(modules, module.names.module)) {
      throw new Error(
        `已存在同名vuex module ${String(module.names.module)}，请修改命名`
      );
    }
    modules[module.names.module] = module.default;
  }
});

// provide typings for `this.$store`
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: VuexStore<any>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<any>> = Symbol("vuex-key");

const store = createStore<StateType>({
  modules,
  state: () => JSON.parse(JSON.stringify(initState)),
  mutations,
  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: !!process.env.DEBUGGING,
});

export default store;
