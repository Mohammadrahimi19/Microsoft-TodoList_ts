<template>
  <div ref="warpper" class="warpper">
    <div  v-for="(item, index) in CompletedTask" :key="index">
      <div v-if="!item.Iscompletd" class="Task uncompleted">
          <div class="flex flex-row gap-2 items-center">
            <input
              type="checkbox"
              :name="item.Name"
              v-model="item.Iscompletd"
              id=""
              class="w-10 h-10 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <input disabled="true" ref="name" type="text"  class="text-3xl border-none bg-transparent focus:border-2 border-blue-950 focus:shadow-2xl duration-300 rounded-md h-10 focus:bg-blue-700 focus:bg-opacity-90 focus:text-white"   :value="item.Name" >
          </div>
          <div class="flex flex-row gap-5 items-center">
                <button @click="item.Liked = !item.Liked">
                <FontAwesomeIcon
                  
                  :class="item.Liked ? 'text-yellow-400' : 'text-black'"
                  :icon="item.Liked ? ['fas', 'fa-star'] : ['far', 'fa-star']"
                />
              </button>
              <button @click="changeEdit(index)" >
                <FontAwesomeIcon
                
                title="ویرایش"
                  class=" text-black'"
                  :icon=" ['fas','fa-pen']"
                />
              </button>
              <button  @click="DeleteItem(item.id!)" >
                <FontAwesomeIcon
                title="حذف"
                  class="text-red-600"
                  :icon=" ['fas','fa-trash-can']"
                />
              </button>
          </div>
      </div>
    </div>


    <p v-if="checkTask" class="text-2xl bg-black bg-opacity-80 text-white w-max p-5 rounded-lg">
      complete
    </p>

    <div v-for="(item, index) in CompletedTask" :key="index">
      <div v-if="item.Iscompletd" class="Task completed">
        <div class="flex flex-row gap-2 items-center">
          <input
            type="checkbox"
            :name="item.Name"
            v-model="item.Iscompletd"
            id=""
            class="w-10 h-10 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <input ref="name" type="text" class="text-3xl border-none bg-transparent" :value="item.Name" >
        </div>
        <button @click="item.Liked = !item.Liked">
          <FontAwesomeIcon
            :class="item.Liked ? 'text-yellow-400' : 'text-black'"
            :icon="item.Liked ? ['fas', 'fa-star'] : ['far', 'fa-star']"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script  lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { Task } from '../../interFace/interface'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { nextTick } from 'process';

const Props = defineProps<{ NewTask?: Task | null }>()

const warpper = ref<HTMLDivElement | null>()
const CompletedTask = ref<Task[]>([])

const checkTask = computed(() => {
  let res=ref<boolean>(false)
  CompletedTask.value.forEach((item)=>{
    if(item.Iscompletd){
      res.value= true
      console.log(item);
      
    }else{
      res.value =false
    }
  })
  return res.value
})

const name= ref<HTMLInputElement[]>([])
const changeEdit =(index:number):void=>{
  name.value[index].disabled = !name.value[index].disabled
  name.value[index].focus()
  document.addEventListener('keydown',(e:Event)=>{
      if(e.key === 'Enter'){
        name.value[index].disabled = !name.value[index].disabled
      }
  })
}

// eslint-disable-next-line vue/return-in-computed-property
const DeleteItem =(id:number)=>{

  const index = CompletedTask.value.findIndex(item=>item.id === id)
  CompletedTask.value.splice(index , 1)
  console.log(CompletedTask,index);
  
}

let  emit = defineEmits(['claer'])
watchEffect(() => {
  console.log(Props.NewTask);
  
  if (Props.NewTask) {
    const NewObj: Task = { ...Props.NewTask }
    console.log(CompletedTask.value.length)
    NewObj.id = CompletedTask.value.length + 1
    console.log(NewObj );

    CompletedTask.value.push(NewObj)
    emit('claer')
  }
})
</script>

<style scoped lang="postcss">
.warpper {
  @apply flex flex-col w-[85%] gap-5  h-[80%] overflow-y-auto;
}
.Task {
  @apply flex flex-row w-full justify-between p-3 text-black text-xl   bg-white bg-opacity-55 rounded-lg;
}
</style>
