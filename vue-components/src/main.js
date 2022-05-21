import { createApp } from 'vue';
import App from './App'
import FriendsItem from './components/Friend-item'
const app = createApp(App);
app.component('friend-item', FriendsItem)
app.mount('#app');
