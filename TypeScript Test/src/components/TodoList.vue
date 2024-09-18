<template>
  <div class="bg-[url('../assets/img/forest.jpg')] w-full h-screen bg-no-repeat relative flex flex-col justify-between py-20 items-center">
    <HeaderTodo />
     
      <MainTodo :NewTask="ReciveTask"/>
    <footerTodo @Task="(value)=>SetTask(value)" />
  </div>
</template>

<script setup lang="ts" >
import HeaderTodo from './Header/HeaderTodo.vue';
import footerTodo from './Footer/footerTodo.vue';
import MainTodo from './MainTodo/MainTodo.vue';
import { ref } from 'vue';
import { Task } from '../interFace/interface';


const ReciveTask = ref<Task>()


const SetTask =(Task:Task):void=>{
      ReciveTask.value = Task
}
</script>

<style >
</style>