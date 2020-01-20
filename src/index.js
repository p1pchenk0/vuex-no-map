export default {
    install(Vue, { Vuex, store }) {
        const mappedState = {};
        const mappedGetters = {};

        for (const moduleName of Object.keys(store.state)) {
            const mapped = Vuex.mapState(moduleName, Object.keys(store.state[moduleName]));

            for (const stateItemName of Object.keys(mapped)) {
                mappedState[`${moduleName}_${stateItemName}`] = mapped[stateItemName];
            }
        }

        for (const getterName of Object.keys(store._wrappedGetters)) {
            mappedGetters[getterName.replace('/', '_')] = store._wrappedGetters[getterName];
        }

        ['_mutations', '_actions'].forEach((e) => {
            for (const storeMethodName of Object.keys(store[e])) {
                Vue.prototype[storeMethodName.replace('/', '_')] = store[e][storeMethodName];
            }
        });

        Vue.mixin({
            computed: {...mappedState, ...mappedGetters}
        });
    }
}
