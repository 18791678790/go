<template>
    <div class="w-screen bg-blue-600 ">
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
        <div class="pl-[3vw] pr-[3vw] pt-[3vw] h-[55vw] mt-[5vw] rounded overflow-hidden">
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
        <div class=" flex scroll-wrapper h-[30vw] item-stretch overflow-hidde mt-[5vw] pl-[3vw] pr-[3vw]" ref="scroll">
            <div class="scroll-content h-[24vw]  flex justify-between  items-stretch  overflow-hidden">
                <div v-for="item in titles" class=" flex justify-between flex-col w-[15vw] h-[24vw] items-center text-center mx-4" v-bind:key="item.id">
                    <img :src="item.iconUrl" alt="" class="text-xl bg-blue-200 rounded-full">
                    <span class=" w-[20vw] font-sans text-red-200">{{ item.name }}</span>
                </div>
            </div>
        </div>
        <!-- 这是推荐歌单 -->
        <div class="pl-[3vw] pr-[3vw] mt-[3vw] flex flex-col self-start justify-between">
            <div class="flex justify-between h-[10vw] items-center">
                <span class=" w-[30vw] text-[5vw] inline-block text-white">推荐歌单<Icon icon="iconamoon:arrow-up-2-thin" color="#ccc" :rotate="1" class="text-2xl inline-block"/></span>
                <span class=" text-4xl"><Icon icon="majesticons:more-menu-line" color="#ccc" :rotate="1" /></span>
            </div>
            <div class=" flex  flex-row justify-between h-[50vw]  overflow-hidden">
                <div v-for="item in songlists" class=" h-[50vw] relative mx-[1vw] flex justify-evenly flex-col" :key="item.id">
                    <img :src="item.uiElement.image.imageUrl" class="w-[30vw] h-[30vw] rounded-md" alt="">
                    <div class="w-[8vw] h-[28vw] absolute top-[4vw] right-[2vw] bottom-[1vw] flex justify-between flex-col">
                        <span class="w-[6vw] h-[4vw] text-white"><Icon icon="solar:play-bold" color="#ccc"  class=" text-sm "/></span>
                        <span class=" text-base text-white"><Icon icon="solar:play-bold" color="#ccc" class=" text-xl " /></span>
                    </div>
                    <p class=" w-[30vw] h-[10vw] text-center text-white text-xs">{{ item.uiElement.mainTitle.title }}</p>
                </div>
            </div>
        </div>
        <!-- 这是新歌新碟 -->
        <div class="pl-[3vw] pr-[3vw] mt-[5vw] flex flex-col self-start justify-between">
            <div class="flex justify-between h-[10vw] items-center">
                <span class=" w-[60vw] text-[5vw] inline-block text-white">新歌新碟\数字专辑<Icon icon="iconamoon:arrow-up-2-thin" color="#ccc" :rotate="1" class="text-2xl inline-block"/></span>
                <span class=" text-4xl"><Icon icon="majesticons:more-menu-line" color="#ccc" :rotate="1" /></span>
            </div>
            <div class=" flex  flex-row justify-between h-[70vw] mt-[4vw] overflow-hidden">
                <div class=" w-[100%] h-[70vw] mx-[2vw] flex justify-between flex-col flex-wrap overflow-hidden">
                    <div v-for="item in newsongs" class="flex flex-wrap flex-col justify-between w-[100%] h-[20vw] overflow-hidden mx-[1vw]"  :key="item.id">
                        <img :src="item.album.blurPicUrl" class="w-[20vw] h-[20vw] rounded-md" alt="">
                        <div class="flex justify-between h-[20vw] flex-col">
                            <span class="w-[60vw] h-[10vw] leading-[10vw] text-white text-sm truncate">{{ item.album.name }}</span>
                            <div class="w-[60vw] h-[10vw] leading-[10vw] text-xs text-slate-300">{{ item.album.subType }}------<span class="w-[20vw] h-[10vw] leading-[10vw] text-slate-300 text-xs">{{ item.album.artists[0].name }}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 这是排行榜 -->
        <div class="pl-[3vw] pr-[3vw] mt-[5vw] flex flex-col self-start justify-between">
            <div class="flex justify-between h-[10vw] items-center">
                <span class=" w-[60vw] text-[5vw] inline-block text-white">排行榜<Icon icon="iconamoon:arrow-up-2-thin" color="#ccc" :rotate="1" class="text-2xl inline-block"/></span>
                <span class=" text-4xl"><Icon icon="majesticons:more-menu-line" color="#ccc" :rotate="1" /></span>
            </div>
            <div class=" flex  flex-col justify-between h-[80vw] pl-[6vw] pr-[6vw] pt-[6vw] pb-[6vw]  rounded-lg rgba(0,0,0,0) shadow-lg border-[1px] overflow-hidden">
                <div class="flex justify-between h-[10vw] items-center">
                    <span class=" w-[60vw] text-[5vw] inline-block text-white">云音乐说唱榜<Icon icon="iconamoon:arrow-up-2-thin" color="#ccc" :rotate="1" class="text-2xl inline-block"/></span>
                    <span class=" text-xs text-slate-400">超3亿次播放</span>
                </div>
                <div class=" w-[100%] h-[60vw] mx-[2vw] flex justify-between flex-col flex-wrap overflow-hidden">
                    <div v-for="item in raper" class="flex flex-wrap flex-col justify-evenly w-[100%] h-[15vw] overflow-hidden mx-[1vw]"  :key="item.id">
                        <img :src="item.resources[0].uiElement.image.imageUrl" class="w-[15vw] h-[15vw] rounded-md" alt="">
                        <span class="w-[10vw] h-[7vw] text-center leading-[7vw] text-red-500">1</span>
                        <div class="flex justify-between h-[15vw] flex-col">
                            <span class="w-[40vw] h-[7vw] leading-[7vw] text-white text-sm truncate">{{ item.resources[0].uiElement.mainTitle.title }}</span>
                            <div class="w-[40vw] h-[7vw] leading-[7vw] text-xs text-slate-300">{{ item.resources[1].resourceExtInfo?.artists[0].name }}</div>
                        </div>
                        <span class=" text-red-500">{{ item.resources[0].uiElement.labelText.text}}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 这是热门话题 -->
        <div class="pl-[3vw] pr-[3vw] mt-[5vw] flex flex-col self-start justify-between">
            <div class="flex justify-between h-[10vw] items-center">
                <span class=" w-[60vw] text-[5vw] inline-block text-white">热门话题<Icon icon="iconamoon:arrow-up-2-thin" color="#ccc" :rotate="1" class="text-2xl inline-block"/></span>
                <span class=" text-4xl"><Icon icon="majesticons:more-menu-line" color="#ccc" :rotate="1" /></span>
            </div>
            <div class="h-[40vw] rounded pl-[3vw] pr-[3vw] mt-[5vw] overflow-hidden flex flex-row">
                <div v-for="item in hots"  class="flex justify-between flex-row h-[40vw] bg-slate-400 mx-2 rounded-lg" :key="item.id">
                    <div class=" pt-[3vw] pb-[3vw] pl-[3vw] pr-[3vw] h-[40vw] w-[70vw] flex justify-evenly flex-col">
                        <div class="h-[15vw] text-lg flex justify-center flex-col text-left">
                            <span class=" text-white text-base h-[8vw] truncate">{{ item.name }}</span>
                            <span class=" text-sm text-slate-300 h-[7vw]">{{item.specialType +'万热度' }}</span>
                        </div>
                        <div class=" w-[100%] h-[25vw] leading-[25vw]  flex justify-between flex-row">
                            <span class=" w-[50vw] h-[20vw] leading-[20vw] text-sm break-all white-space truncate" >{{ item.description }}</span>
                            <span>
                                <img :src="item.subscribers[0]?.avatarUrl" alt="" class="w-[20vw] h-[20vw] rounded-lg" />
                            </span>
                        </div>
                </div>
                </div>
            </div>
        </div>

        <!-- 这是音乐日历 -->
        <div class="pl-[3vw] pr-[3vw] mt-[5vw] flex flex-col self-start justify-between">
            <div class="flex justify-between h-[10vw] items-center">
                <div class=" w-[60vw] text-[5vw] text-white">
                    音乐日历
                    <span class=" ml-[3vw] rounded-lg rgba(0,0,0,0) text-xs border-[1px]">
                        更多
                        <Icon icon="iconamoon:arrow-up-2-thin" color="#ccc" :rotate="1" class="text-2xl inline-block"/>
                    </span>
                    </div>
                <span class=" text-4xl"><Icon icon="majesticons:more-menu-line" color="#ccc" :rotate="1" /></span>
            </div>
            <div class=" flex  flex-col justify-between h-[50vw] pl-[6vw] pr-[6vw] pt-[6vw] pb-[6vw]  rounded-lg rgba(0,0,0,0) shadow-lg border-[1px] overflow-hidden">
                <div class=" w-[100%] h-[60vw] mx-[2vw] flex justify-between flex-col flex-wrap overflow-hidden">
                    <div v-for="item in calendars" class="flex flex-wrap flex-col justify-evenly w-[100%] h-[15vw] overflow-hidden mx-[1vw]"  :key="item.id">
                        <div class="flex justify-between h-[15vw] flex-col">
                            <span class="w-[40vw] h-[7vw] leading-[7vw] text-white text-sm truncate">{{ item.resources[0].uiElement.mainTitle.title }}</span>
                            <div class="w-[40vw] h-[7vw] leading-[7vw] text-xs text-slate-300">{{ item.resources[1].resourceExtInfo?.artists[0].name }}</div>
                        </div>
                        <div class="flex justify-center flex-col w-[10vw] ">
                            <Icon icon="streamline:interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm" color="white" class=" self-center" />
                            <span class="flex-auto text-white text-xs self-center">1564</span>
                        </div>
                        <img :src="item.resources[0].uiElement.image.imageUrl" class="w-[15vw] h-[15vw] rounded-md" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {banner,title,songlist,newsong,rap,hot,calendar} from '@/request/index';
import BScroll from '@better-scroll/core';
import Swiper from "swiper";
export default {
    data() {
        return {
            carousel:[],
            titles: [],
            songlists: [],
            newsongs: [],
            raper: [],
            hots: [], 
            calendars: [],
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
        time() {
            const today = new Date();
            month = today.getMonth - 1;
            day = today.getDay;
            console.log(month/day)
        }
    },
//数据
    async created() {
        const res = await banner();
        this.carousel = res.data.data.blocks[0].extInfo.banners;
        // console.log(this.carousel);

        const res1 = await title();
        this.titles = res1.data.data;
        // console.log(this.titles);

        const res2 = await songlist();
        this.songlists = res2.data.data.blocks[1].creatives;
        // console.log(this.songlists);

        const res3 = await newsong();
        this.newsongs = res3.data.data;
        // console.log(this.newsongs);

        const res4 = await rap();
        this.raper = res4.data.data.blocks[3].creatives;
        // console.log(this.raper);

        const res5 = await hot();
        this.hots = res5.data.playlists;
        // console.log(this.hots);

        const res6 = await calendar();
        this.calendars = res6.data.data.blocks[5].creatives;
        // console.log(this.calendars);
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