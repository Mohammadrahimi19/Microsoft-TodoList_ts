<template>
  <div class="reactive flex flex-row justify-between px-32 w-full items-center   p-6">
      <div class="flex flex-col gap-2 text-5xl text-white ">
          <p class="Data">Sunday</p>
          <p class="Time">27.Desomber</p>
      </div>
      <div class="flex text-white flex-row gap-3">
         <div class="p-4 w-max h-max  bg-black bg-opacity-65 rounded-md ">
          <FontAwesomeIcon :icon="['fas','fa-maximize']" />
        </div>
         <div class="p-4 w-max h-max bg-black bg-opacity-65 rounded-md ">
            <FontAwesomeIcon :icon="['fas','fa-lightbulb']" />
         </div>
         <div class="p-4 w-max h-max ">

          <FontAwesomeIcon :icon="['fas','fa-ellipsis']" />

        </div>
      </div>
  </div>
</template>

<script setup lang="ts" >
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


</script>

<style>

</style>