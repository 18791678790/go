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
//


