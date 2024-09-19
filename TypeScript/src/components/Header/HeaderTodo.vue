<template>
  <div class="reactive flex flex-row justify-between px-32 w-full items-end p-6" dir="rtl">
    <div class="flex flex-col gap-5 text-5xl text-white">
      <p class="Data">عصر بخیر  محمد</p>
      <p class="Time drop-shadow-lg shadow-2xl ">
        <!-- {{ dayOfWeek }} {{ day }}- {{ month }} {{ year }} -->
          {{ formattedDate }} - {{ YaerNow }}
      </p>
    </div>
    <div class="flex text-white flex-row gap-3">
      <div class="p-4 w-max h-max bg-black bg-opacity-65 rounded-md cursor-pointer">
        <FontAwesomeIcon class="text-2xl" :icon="['fas', 'fa-maximize']" />
      </div>
      <div class="p-4 w-max h-max bg-black bg-opacity-65 rounded-md cursor-pointer">
        <FontAwesomeIcon class="text-2xl" :icon="['fas', 'fa-lightbulb']" />
      </div>
      <div class="p-4 w-max h-max bg-black bg-opacity-65 rounded-md cursor-pointer">
        <FontAwesomeIcon class="text-2xl" :icon="['fas', 'fa-ellipsis']" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const currentDate: Date = new Date();

// Create an Intl.DateTimeFormat object for Persian locale
const options: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',  // Include the day of the week
  timeZone: 'Asia/Tehran', // Set the time zone to Tehran
};

const yaer: Intl.DateTimeFormatOptions = {

  timeZone: 'Asia/Tehran', // Set the time zone to Tehran
  year: 'numeric',
};


// Create a formatter
const persianDateTimeFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('fa-IR', options);
const YaerFormater:Intl.DateTimeFormat  = new Intl.DateTimeFormat('fa-IR', yaer)
// Format the current date and time
const formattedDate: string = persianDateTimeFormatter.format(currentDate);
const YaerNow:string = YaerFormater.format(currentDate)
console.log(formattedDate); 


// const daysOfWeek = ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه']
// const months = [
//   'فروردین',
//   'اردیبهشت',
//   'خرداد',
//   'تیر',
//   'مرداد',
//   'شهریور',
//   'مهر',
//   'آبان',
//   'آذر',
//   'دی',
//   'بهمن',
//   'اسفند'
// ]

</script>

<style></style>
