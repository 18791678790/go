<!-- 把index.template + index.js -->
<template>
   <div class="w-screen h-screen">
    <div class="flex w-[60vw] h-[8vw] items-center justify-between  ml-[2vw]">
      <span class="align-middle text-2xl "><Icon icon="streamline:interface-arrows-button-left-arrow-keyboard-left" /></span>
      <span class="text-2xl ">歌单广场</span>
    </div>
    <div class="h-[10vw] mb-[2vw] relative">
            <div class="w-[80vw] h-[10vw] overflow-hidden ml-[3.5vw] scroll-wrapper " ref="scroll">
                <ul class="flex items-center scroll-content overflow-hidden h-[10vw] w-[125vw]">
                    <li v-for="item in menu" class="mr-[4.5vw] h-[4vw] text-center cursor-pointer text-[3vw] scroll-item" v-bind:class="{active:item.name === activeMenuItem}" :key="item.id"
                        @click="toggleMenu(item.name)">
                        {{item.name}}
                        
                    </li>
                </ul>
            </div>
            <Icon icon="uiw:appstore-o" color="#999" class="absolute right-[4vw] top-[3.2vw] w-[4vw] h-[4vw]"/>
        </div>
        <ul class="flex flex-wrap justify-evenly">
            <li v-for="item in playlists" class="w-[30vw] h-[45vw] relative" v-bind:key="item.id">
                <div class="w-[30vw] h-[30vw] rounded overflow-hidden text-center">
                    <img :src="item.coverImgUrl" class="w-[30vw] h-[30vw]" alt=""/>
                    <span v-for="item in playlists" class="w-[8vw] h-[4vw] rounded-md  bg-red-200 absolute top-[1vw] right-[1vw] font-black text-lg" v-bind:key="item.id">{{item.city}}</span>
                </div>
                <p class="w-[30vw] text-sm">{{item.name}}</p>
            </li> 
        </ul>
</div>
</template>
<script>
import { featchPlaylistHot, featchPlaylists } from '@/request/index';
import BScroll from '@better-scroll/core';
export default {
  data() {
    return {
      menu: [],
      activeMenuItem: '华语',
      playlists: [],
    };
  },
  mounted() {
      this.init()
    },
  beforeDestroy() {
    this.bs.destroy()
    },
  methods: {
    toggleMenu(name) {
      this.activeMenuItem = name;
    },
    beforeDestroy() {
      this.bs.destroy()
    },
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        probeType: 3,// listening scroll event
        click:true,
      })
    },
  },
  // fetchPlaylists(cat) {
  //   axios.get(
  //     'https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist?cat=%E5%8D%8E%E8%AF%AD',
  //     {
  //       params: { cat }
  //     }
  //   )
  //     .then((res) => {
  //       console.log(res.data.playlists);
  //       this.playlists = res.data.playlists;
  //     });

  // },

  async created() {
    const res = await featchPlaylistHot().catch((err) => console.log(err));
    this.menu = res.data.tags;
  },
  //监控某个响应数据发生之后执行指定的动作(函数)
  //基本用法


  //特殊需求才使用
  watch: {
    activeMenuItem: {
      //指定数据变化的回调函数
      //await是saync的语法糖
      // async是接的返回值是then后面的res数据
      //async(){await+promise}
      async handler(newCat) {
        const res = await featchPlaylists(newCat);
        this.playlists = res.data.playlists;
      },
      //执行配置,立即执行
      immediate: true,
      // deep:true, //深度监听 用于对像/数组
    },
  },

  //回调函数(生名周期函数)
  //自发执行 this指向实例
  //beforCreate

  // created() {
  //   axios
  //     .get(
  //       'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot'
  //     )
  //     .then((res) => {
  //       this.menu = res.data.tags;
  //       return (this.activeMenuItem = this.menu[0].name);
  //     })
  //     .then((cat) => this.fetchPlaylists(cat))
  //     .catch((err) => console.log(err));
  // },

};
</script>

<style>
  .active {
    color:pink;
}
</style>








