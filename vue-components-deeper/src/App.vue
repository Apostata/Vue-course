<template>
  <div>
    <the-header />
    <badge-list />
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <course-goals #default="slotProps">
      <h2>{{slotProps.item}}</h2>
      <p>
        {{ slotProps['anotherProp'] }}
      </p>
    </course-goals>

    <button @click="activeOrManageGoals('active-goals')">Active Goals</button>
    <button @click="activeOrManageGoals('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedType === 'active'"></active-goals>
    <manage-goals v-if="selectedType === 'manage'"></manage-goals> -->
    <component :is="selectedType"></component>
   
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';
import BadgeList from './components/BadgeList.vue';
import CouseGoals from './components/CourseGoals.vue';

export default {
  
  components:{
    'the-header': TheHeader,
    'user-info': UserInfo,
    'badge-list': BadgeList,
    'course-goals': CouseGoals,
  },
  data() {
    return {
      selectedType:"active-goals",
      activeUser: {
        name: 'Rene Souza',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    activeOrManageGoals(type){
      this.selectedType = type
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>