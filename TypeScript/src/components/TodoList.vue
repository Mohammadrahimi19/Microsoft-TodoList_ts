<template>
  <div
    class="bg-[url('../assets/img/forest.jpg')] w-full h-screen bg-no-repeat relative flex flex-col justify-between py-20 items-center"
  >
    <HeaderTodo />
  <TesTset/>
    <MainTodo :NewTask="ReciveTask" @claer="ReciveTask = null"/>
    <footerTodo @Task="(value) => SetTask(value)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Task } from '../interFace/interface'

import FooterTodo from './Footer/footerTodo.vue';
import MainTodo from './MainTodo/MainTodo.vue';
import HeaderTodo from './Header/HeaderTodo.vue';
const ReciveTask = ref<Task |null>()

const SetTask = (Task: Task): void => {
  ReciveTask.value = Task
}
</script>

<style></style>
