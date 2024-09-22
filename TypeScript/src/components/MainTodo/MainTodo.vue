<template>
  <div ref="warpper" class="warpper">
      <div ref="ELements" :Elem="item.id" v-for="(item, index) in incomplated" :key="index">
          <div  class="Task uncompleted">
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
                      class=" text-blue-950/100 hover:animate-pulse"
                      :icon=" ['fas','fa-pen']"
                    />
                  </button>
                  <button  @click="DeleteItem(item.id)" >
                    {{ item.id }}

                    <FontAwesomeIcon
                    title="حذف"
                      class="text-red-600 hover:animate-pulse"
                      :icon=" ['fas','fa-trash-can']"
                    />
                  </button>
              </div>
          </div>
      </div>


      <p v-if="ChackTitle" class="text-2xl bg-black bg-opacity-80 text-white w-max p-5 rounded-lg">
        complete
      </p>

      <div ref="ELements" :Elem="item.id" v-for="(item, index) in CompletedTask" :key="index">
        <div   class="Task completed">
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
          <button  @click="DeleteItem(item.id)" >
            {{ item.id }}
                  <FontAwesomeIcon
                  title="حذف"
                    class="text-red-600 hover:animate-pulse"
                    :icon=" ['fas','fa-trash-can']"
                  />
            </button>
        </div>
      </div>
  </div>
</template>

<script  lang="ts" setup>
import {  nextTick, ref, watchEffect ,watch} from 'vue'
import { Task } from '../../interFace/interface'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import gsap from 'gsap';

const ELements =ref<HTMLDivElement[]>([])
const Props = defineProps<{ NewTask?: Task | null }>()

const warpper = ref<HTMLDivElement | null>()
const AllTasks = ref<Task[]>([])
const CompletedTask = ref<Task[]>([])
const incomplated =ref<Task[]>([])
const  emit = defineEmits(['claer'])



const name= ref<HTMLInputElement[]>([])
const changeEdit =(index:number):void=>{
  name.value[index].disabled = !name.value[index].disabled
  name.value[index].focus()
  document.addEventListener('keydown',(e:KeyboardEvent)=>{
      if(e.key === 'Enter'){
        name.value[index].disabled = !name.value[index].disabled
      }
  })
}

const DeleteItem =(id:number | undefined)=>{
  
  const index = AllTasks.value.findIndex(item=>item.id === id)  
  UpdateElement(false,index,id)
}




watch(AllTasks,()=>{
    AllTasks.value.forEach((item)=>{
      
     if(!item.Iscompletd &&  !incomplated.value.some(item2=>item2 === item )){
        incomplated.value.push(item)
        CompletedTask.value.forEach((item,index)=>{
            if(!item.Iscompletd){
              CompletedTask.value.splice(index,1)
            }
        })
      
        
     }else if(item.Iscompletd &&  !CompletedTask.value.some(item2=>item2 === item )) {
      incomplated.value.forEach((item,index)=>{
            if(item.Iscompletd){
              incomplated.value.splice(index,1)
            }
        })
      CompletedTask.value.push(item)
     }
    })
    

    CheckTitleFunc()
    
 
},{deep:true})
const ChackTitle = ref<boolean>(false)
watchEffect( async() => {
  
  if (Props.NewTask) {
    const NewObj: Task = { ...Props.NewTask }
    NewObj.id = AllTasks.value.length + 1
    AllTasks.value.push(NewObj)

    await nextTick()
    UpdateElement(true)
    
  

    emit('claer')
  }
})

const CheckTitleFunc = ():void =>{
      if(AllTasks.value.some(item=>item.Iscompletd)){
        ChackTitle.value = true
      }else{
        ChackTitle.value = false
      }
}



// اعمال انیمیشن  برای اد و حذف کردن تودو
const UpdateElement=(status:boolean,index?:number,id?:number):void =>{
    if(status){
      console.log(AllTasks.value);
      
      ELements.value.forEach((item  , index) => {
        if(index === AllTasks.value.length -1){
          gsap.from(item, { opacity: 0, y: 50, duration: 0.5, ease: 'back.out(1.7)'});
        }
      });
    }else {
      ELements.value.forEach((item)=>{
        if(Number(item.getAttribute('Elem')) === id){
          console.log(item);
          gsap.to(item,{
          opacity: 0, y: 200, duration: 0.5, ease: 'back.out(1.7)',display:'none',onComplete:()=>{
            CheckTitleFunc()
            AllTasks.value.splice(index!,1)
            console.log(AllTasks.value);
          }
        })        
        }  
        })
      
   
    }
    

}


</script>

<style scoped lang="postcss">
.warpper {
  @apply flex flex-col w-[85%] gap-5  h-[80%] overflow-y-auto;
}
.Task {
  @apply flex flex-row w-full justify-between p-3 text-black text-xl   bg-white bg-opacity-55 rounded-lg;
}
</style>
