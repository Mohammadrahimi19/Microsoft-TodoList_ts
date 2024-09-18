<template>
  <div class="reactive flex flex-row justify-between px-32 w-full items-end   p-6" dir="rtl">
      <div class="flex flex-col gap-2 text-5xl text-white ">
          <p class="Data">My Day</p>
          <p   class="Time  drop-shadow-lg shadow-2xl">{{ dayOfWeek}} {{ day }}-  {{ month }}  {{ year }}</p>
      </div>
      <div class="flex text-white flex-row gap-3">
         <div class="p-4  w-max h-max  bg-black bg-opacity-65 rounded-md  cursor-pointer">
          <FontAwesomeIcon class="text-2xl" :icon="['fas','fa-maximize']" />
        </div>
         <div class="p-4  w-max h-max bg-black bg-opacity-65 rounded-md  cursor-pointer">
            <FontAwesomeIcon class="text-2xl" :icon="['fas','fa-lightbulb']" />
         </div>
         <div class="p-4  w-max h-max bg-black bg-opacity-65 rounded-md cursor-pointer">
           <FontAwesomeIcon class="text-2xl" :icon="['fas','fa-ellipsis']" />
        </div>
      </div>
  </div>
</template>

<script  setup lang="ts" >
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const date = new Date()
import jalaali  from 'jalaali-js'
const jalaaliDate = jalaali.toJalaali(date)

const daysOfWeek = ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
// استخراج روز، ماه و سال
const dayOfWeek = daysOfWeek[new Date(jalaaliDate.jy, jalaaliDate.jm - 1, jalaaliDate.jd).getDay()];
const day = jalaaliDate.jd;
const month = months[jalaaliDate.jm - 1];
const year = jalaaliDate.jy;

</script>

<style>

</style>