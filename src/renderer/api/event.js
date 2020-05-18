import Vue from 'vue';

const eventHub = new Vue({
  methods: {
    /* eslint-disable prefer-spread */
    on(...args) {
      this.$on.apply(this, args,false);
    },
    emit(...args) {
      this.$emit.apply(this, args,false);
    },
    off(...args) {
      this.$off.apply(this, args);
    },
    once(...args) {
      this.$once.apply(this, args);
    },
    /* eslint-disable prefer-spread */
  },
});
export const eventBusPlugin = (V) => Object.defineProperty(V.prototype, '$eventBus', { value: eventHub, writable: true });

export default eventHub;