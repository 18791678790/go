//所有的请求都定义在这个位置
import axios from 'axios';
//歌单数据
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
export const featchPlaylistHot = () => http.get('/playlist/hot');
export const featchPlaylists = (cat) =>
  http.get('/top/playlist', { params: { cat } });
//轮播图数据
export const banner = () => http.get('/homepage/block/page');
//菜单数据
export const title = () => http.get('/homepage/dragon/ball');
//推荐歌单数据
export const songlist = () => http.get('/homepage/block/page');
//新歌新碟\数字专辑
export const newsong = () => http.get('./top/song');
// 这是排行榜
export const rap = () => http.get('/homepage/block/page');
//这是热门话题
export const hot = () => http.get('/top/playlist?cat=华语');
//这是音乐日历
export const calendar = () => http.get('/homepage/block/page');