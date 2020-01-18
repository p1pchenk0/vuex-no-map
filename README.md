# vuex-no-map
[![npm](https://img.shields.io/npm/v/vuex-no-map.svg)](vue-handy-subscriptions) ![npm](https://img.shields.io/npm/dt/vuex-no-map.svg)

This plugin allows to omit using `mapState`, `mapGetters`, `mapMutations`, `mapActions`
And thus reduce amount of code.

For example, instead of writing this code (consider having `counter` store module):
```vue
<template>
    <div>{{ count }}</div>
    <div>{{ getFormattedCount }}</div>
    <button @click="INCREMENT">+</button>
    <button @click="DECREMENT">-</button>
    <button @click="callApi">call</button>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'TestComponent',
    computed: {
        ...mapState('counter', ['count']),
        ...mapGetters('counter', ['getFormattedCount'])
    },
    methods: {
        ...mapMutations('counter', ['INCREMENT', 'DECREMENT']),
        ...mapActions('counter', ['callApi'])
    }
}
</script>
```
We could write this:
```vue
<template>
    <div>{{ counter_count }}</div>
    <div>{{ counter_getFormattedCount }}</div>
    <button @click="counter_INCREMENT">+</button>
    <button @click="counter_DECREMENT">-</button>
    <button @click="counter_callApi">call</button>
</template>

<script>
export default {
    name: 'TestComponent'
}
</script>
```
Usage:
```javascript
import Vue from 'vue';
import Vuex from 'vuex';
import VuexNoMap from 'vuex-no-map';

const store = new Vuex.Store({
    // store options here
});

Vue.use(VuexNoMap, { Vuex, store });
```
