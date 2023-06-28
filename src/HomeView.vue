<template>
    <div class="w-screen h-screen bg-green-300 ">
        <div class="flex justify-between pl-[3vw] pr-[3vw] pt-[3vw] h-[10vw] items-center">
            <span><Icon icon="clarity:menu-line" color="#ccc" class="text-3xl"/></span>
            <div class="relative w-[70vw] h-[10vw] rounded-3xl border-solid border-2 border-white-100 leading-[10vw] overflow-hidden  bg-zinc-300  opacity-50">
                <span class="absolute left-[2vw] text-2xl top-[2vw] align-middle"><Icon icon="basil:search-outline" color="#ccc" /></span>
                <input class="w-[70vw] pl-[8vw] h-[10vw] border-none outline-none items-center" type="text"  placeholder="大家都在搜  林俊杰">
                <span class="absolute right-[2vw] text-xl top-[2vw]"><Icon icon="tabler:scan" color="#ccc" /></span>
            </div>
            <span><Icon icon="emojione:microphone" color="#ccc" class=" text-3xl" /></span>
        </div>
        <!-- 这是轮播图 -->
        <div class="pl-[3vw] pr-[3vw] pt-[3vw]">
            <div class="swiper-container" ref="cur">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in carousel" :key="item.id">
                        <img :src="carousel.imgUrl" />
                    </div>
            </div>
        <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            </div>
        </div>
        <!-- 这是菜单 -->
        <div class="scroll-wrapper h-[30vw] leading-[30vw] overflow-hidde" ref="scroll">
            <div class="scroll-content h-[25vw]  flex justify-evenly self-start overflow-hidden pl-[3vw] pr-[3vw] pt-[3vw] ">
                <div v-for="item in titles" class=" flex justify-evenly flex-col w-[15vw] h-[28vw] items-center text-center mx-3"  v-bind:key="item.id">
                    <img :src="item.iconUrl" alt="" class="text-xl">
                    <span class=" w-[15vw] text-xs">{{ item.name }}</span>
                </div>
            </div>
    </div>
        <!-- 这是推荐歌单 -->
        <div>
            
        </div>



    </div>
</template>

<script>
import {title} from '@/request/index';
import BScroll from '@better-scroll/core';
// import Swiper from "swiper";
export default {
    data() {
        return {
            carousel:[],
            titles:[],
        };
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      this.bs.destroy()
    },
    methods: {
        init() {
            this.bs = new BScroll(this.$refs.scroll, {
                probeType: 3,
                click: true,
            });
        },
    },
    // created() {
    //     axios.get(
    //         'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
    //     )
    //         .then((res) => {
    //             console.log(res);
    //             this.carousel = res;
    //         })
    //         .catch((err) => console.log(err));
    // },

    async created() {
        const res = await title().catch((err) => console.log(err));
        this.titles = res.data.tags;
    },

//     watch: {
//         list: {
//             immediate: true,
//             handler() {
//                 this.$nextTick(() => {
//                     new Swiper('.swiper-container', {
//                         loop: true, // 循环模式选项

//                         // 如果需要分页器
//                         pagination: {
//                             el: '.swiper-pagination',
//                             clickable: true
//                         },

//                         // 如果需要前进后退按钮
//                         navigation: {
//                             nextEl: '.swiper-button-next',
//                             prevEl: '.swiper-button-prev',
//                         },

//                         // 如果需要滚动条
//                         scrollbar: {
//                             el: '.swiper-scrollbar',
//                         },
//                     });
//                 });
//             },
//         },
//     },
}


</script>

<style>


</style>