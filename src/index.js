import Vue from 'vue/dist/vue.esm';
//import x for y;
// y => package.json = main:''

const vm = new Vue({
  el: '#app',
  data() {
    return {
      msg: 'hello, vuejs!',
    };
  },
});
