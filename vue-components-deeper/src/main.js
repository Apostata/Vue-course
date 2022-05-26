import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard';
import ActiveGoals from './components/ActiveGoals';
import ManageGoals from './components/ManageGoals';

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
app.component('active-goals', ActiveGoals);
app.component('manage-goals', ManageGoals);

app.mount('#app');
