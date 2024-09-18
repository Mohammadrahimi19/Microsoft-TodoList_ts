<template>
  <div  ref="warpper" class="warpper ">
    <div v-for="(item, index) in UncomplatedTask" :key="index">
        <div  class="Task uncompleted"  >
            <div class="flex flex-row gap-2">
                <input type="checkbox" :name="item.Name" v-model="item.Iscompletd" id=""  class="w-10 h-10 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <p class="text-3xl"> {{ item.Name }} </p> 
            </div>
            <button @click="item.Liked = !item.Liked">
                <FontAwesomeIcon  :class="item.Liked ? 'text-yellow-400' :'text-black'" :icon="item.Liked ? ['fas','fa-star'] : ['far','fa-star']"/>
            </button>
        </div>
    </div>
    <p v-if="CompletedTask.length > 0" class="text-2xl bg-black bg-opacity-80 text-white w-max  p-5 rounded-lg">complete</p>
    
    <div v-for="(item, index) in CompletedTask" :key="index">
             <div  class="Task uncompleted" >
                 <div class="flex flex-row gap-2">
                     <input type="checkbox" :name="item.Name" v-model="item.Iscompletd" id=""  class="w-10 h-10 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                     <p class="text-3xl"> {{ item.Name }} </p> 
                </div>
                <button @click="item.Liked = !item.Liked">
                    <FontAwesomeIcon  :class="item.Liked ? 'text-yellow-400' :'text-black'" :icon="item.Liked ? ['fas','fa-star'] : ['far','fa-star']"/>
                </button>
            </div>
     </div>
    

  </div>
</template>

<script setup lang="ts" >
import { reactive, ref, watch, watchEffect } from 'vue';
import { Task } from '../../interFace/interface';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



const Props =defineProps<{NewTask?:Task}>()

const warpper =ref<HTMLDivElement | null>()
const CompletedTask = reactive<Task[]>([])
const UncomplatedTask =reactive<Task[]>([])
watch(CompletedTask,()=>{
    
    const test =  CompletedTask.filter(item =>item.Iscompletd)
    const test2 = UncomplatedTask.filter(item=>!item.Iscompletd)
    if(test.length > 0 || test2.length){
        UncomplatedTask.splice(0,UncomplatedTask.length,...test)
        CompletedTask.splice(0,CompletedTask.length,...test2)
    }
    
})
watchEffect(()=>{

    if(Props.NewTask){

        const NewObj:Task = {...Props.NewTask}
        NewObj.id = CompletedTask.length + UncomplatedTask.length + 1 
        NewObj.Iscompletd =true
          
        
        if(NewObj.Iscompletd){
                CompletedTask.push(NewObj)
                
            }else{
                UncomplatedTask.push(NewObj)
            }
        }
},)

</script>

<style lang="postcss">
.warpper{
    @apply flex flex-col w-[85%] gap-5  h-[80%] overflow-y-auto
}
.Task{
    @apply flex flex-row w-full justify-between p-3 text-black text-xl   bg-white bg-opacity-55 rounded-lg
}
</style>