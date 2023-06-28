<template>
    <div class="w-screen h-screen bg-blue-600 ">
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
        <div class="pl-[3vw] pr-[3vw] pt-[3vw] h-[55vw] mt-[5vw] rounded">
            <div class="swiper-container h-[50vw]" ref="cur">
                <div class="swiper-wrapper h-[50vw]">
                    <div class="swiper-slide h-[50vw] rounded" v-for="item in carousel" :key="item.id">
                        <img :src="item.pic" class="w-[100%] h-[50vw] rounded" />
                    </div>
            </div>
        <!-- 如果需要分页器 -->
            <div class="swiper-pagination w-[20vw] h-[7vw]"></div>
            </div>
        </div>
        <!-- 这是菜单 -->
        <div class=" flex scroll-wrapper h-[25vw] item-stretch overflow-hidde mt-[5vw] pl-[3vw] pr-[3vw]" ref="scroll">
            <div class="scroll-content h-[25vw]  flex justify-between self-start overflow-hidden  items-stretch">
                <div v-for="item in titles" class=" flex justify-evenly flex-col w-[15vw] h-[16vw] items-center text-center mx-3" v-bind:key="item.id">
                    <img :src="item.iconUrl" alt="" class="text-xl bg-blue-200 rounded-full">
                    <span class=" w-[20vw] font-sans text-red-200">{{ item.name }}</span>
                </div>
            </div>
    </div>
        <!-- 这是推荐歌单 -->
        <div>
            
        </div>



    </div>
</template>

<script>
import {banner,title} from '@/request/index';
import BScroll from '@better-scroll/core';
import Swiper from "swiper";
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
//数据
    async created() {
        const res = await banner();
        this.carousel = res.data.data.blocks[0].extInfo.banners;
        // console.log(this.carousel);

        const res1 = await title();
        this.titles = res1.data.data;
        // console.log(this.titles);
    },

    watch: {
        carousel: {
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    new Swiper('.swiper-container', {
                        loop: true, // 循环模式选项
                        autoplay:true,
                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },

                    });
                });
            },
        },
    },
}


</script>

<style>


</style>