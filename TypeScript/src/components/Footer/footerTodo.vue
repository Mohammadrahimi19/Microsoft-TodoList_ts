<template>
  <div class="relative w-full px-32">
    <div class="w-full relative">
      <FontAwesomeIcon
        class="absolute top-4 left-4 cursor-pointer text-white text-4xl"
        :icon="['fas', 'fa-plus']"
      />
      <div
        v-if="hasIconShow"
        class="flex flex-row text-white text-xl items-center gap-4 absolute right-4 cursor-pointer top-4"
      >
        <FontAwesomeIcon :icon="['fas', 'fa-house']" />
        <p>Task</p>
        <FontAwesomeIcon :icon="['fas', 'fa-calendar-days']" />
        <FontAwesomeIcon :icon="['fas', 'fa-business-time']" />
      </div>
      <input
        title=" Add a Task in My Day"
        @keydown.esc="cansle"
        @keydown.enter="sendTask"
        @click="Toggle"
        class="w-full h-16 rounded-xl text-2xl !outline-none focus:outline-none border-none !ring-transparent !focus:border-none bg-black bg-opacity-85 text-white indent-12"
        :placeholder="placeHolder"
        type="text"
        name="input"
        v-model="input"
        id="input"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import { Task } from '../../interFace/interface'

const input = ref<string>('')
const hasIconShow = ref<boolean>(false)
const placeHolder = ref<string>('Add a Task')

// برای وقتی که اگه به جایی غیر ا زالمنت کلیک کرد خارج بشود
const Toggle = (e: Event): void => {
  placeHolder.value = 'Try Typing Somthing ...'
  hasIconShow.value = true
  document.addEventListener('click', (ev: Event) => {
    if (ev.target != e.target) {
      placeHolder.value = 'Add a Task'
      hasIconShow.value = false
    }
  })
}

const Emit = defineEmits<{ Task:[Task] }>()

const sendTask = (): void => {
  if (input.value.trim()) {
    const NewTask: Task = {
      Name: input.value.trim(),
      Iscompletd: false,
      Liked: false,
      id: 0
    }

    Emit('Task', NewTask)
    input.value = ''
  }
}

const cansle = () => {
  input.value = ''
  hasIconShow.value = false
}
</script>

<style></style>
