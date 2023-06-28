import Vue from 'vue/dist/vue.esm.js';
// import Vue from 'vue';
import './index.css';
import "swiper/css/swiper.css";
import indexView from './HomeView.vue';
// import indexView from './IndexView.vue';
import { Icon } from '@iconify/vue2';
Vue.component('Icon', Icon);


//import x for y;
// y => package.json = main:''

//页面打开请求自动发送
//请求回来的数据还要渲染到页面(数据驱动视图)
//数据驱动视图的条件：数据必须是响应式数据data,数据必须通过模板语法绑定到模板中
//vue中this的指向：methods中的所有函数(不要箭头函数)的this指向vm (vue的实例》


const vm = new Vue({

  //挂在节点  
  el: '#app',
  render:(h)=> h(indexView),
  //指令时出现在模板中
  //模板语法：指令

  //模板在一定程度上与html片段非常相似 html + 指令 === template
  // template: '<h1>vuejs,hello!</ h1> ',
  //template: 'div id="app123">{{msg}</div>'，ll=<div id="app123".hello，vuejs!</div>当我不传递template选项时，存不存在template?如果存在，是什么?
  //如果不传递template它就会检查有没有传递el，如果传递，则将el.outHTML获取到并作为template传入el.outHTML是template默认值
  //template取值流程:手动传递的模版> el.品tHTML > undefined

});

// window.vm = vm;
// console.log(vm);

//以_开头的变量名属性名是私有变量或私有属性，不希望其他人去使用
//一般情况下：我们实例化vue传送的配置a => $a
//el => $el
//data => $data


// function VM(config) {
//   const defaultOptions = {
//     components: {},
//     directives: {},
//     filters: {},
//   };
//   this.$options = Object.assign(defaultOptions, config);
//   //实例化操作开始
//   typeof this.$options.beforeInit === 'function'
//     && this.$options.beforeInit.call(this);
//   this.$set = function (key, value) {
//     this.$data[key] = value;
//     Object.defineProperty(this, key, {
//       get() {
//         return this.$data[key];
//       },
//       set(value) {
//         this.$data[key] = value;
//       },
//     });
//   };

//   this.$data =
//     typeof this.$options.data === 'function' ? this.$options.data() : this.$options.data();
//   Object.keys(this.$data).forEach((key) => {
//     Object.defineProperty(this, key, {
//       get() {
//         return this.$data[key];
//       },
//       set(value) {
//         this.$data[key] = value;
//       },
//     });
//   });
//   Object.keys(this.$options.methods).forEach((key) => {
//     Object.defineProperty(this, key, {
//       get() {
//         return this.$options.methods[key];
//       },
//       set(value) {
//         this.$options.methods[key] = value;
//       },
//     });
//   });

  //实例化刚刚结束
  // typeof this.$options.afterInit === 'function' && this.$options.afterInit.call(this);


  // vm.fn(); // _vm对象代理了_vm.$options.methods.fn这个方法
  // _vm.$options.methods.fn.bind(_vm)()


  //@description 获取数据