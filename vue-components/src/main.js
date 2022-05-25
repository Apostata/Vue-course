import { createApp } from 'vue';
import App from './App'
import FriendsItem from './components/FriendItem/Friend-item'
import NewFriend  from './components/NewFriend/newFiend'
import FriendsItemChildOnly from './components/FriendItem/Friend-item-childOnly'
const app = createApp(App);
app.component('new-friend', NewFriend)
app.component('friend-item', FriendsItem)
app.component('friend-item-childOnly', FriendsItemChildOnly)
app.mount('#app');
