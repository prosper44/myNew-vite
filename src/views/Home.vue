<template>
    <nav class="bg-[#008289] flex justify-between py-5">
    <div >
      <h3 class="ml-10 text-[#FFFFFF] italic font-Poppins font-bold">Eventful Moments.</h3>
    </div>
  
    <ul class="flex space-x-5 mr-20 text-[#FFFFFF]  font-Poppins ">
      <RouterLink to="/">
        <li>Login</li>
      </RouterLink>
      <RouterLink to="/LoginPage">
        <li>Register</li>
      </RouterLink>
    </ul>
    </nav>
  
  
    <div class="flex justify-center">
    <div class="sm:mt-20  p-4 ">
      <h1 class="sm:text-4xl font-bold">Welcome back, </h1>
      <p class="text-xs sm:text-sm md:text-base lg:text-lg">Hi, my name is Eventful Moments, I am a bucket… no, not the<br/>
        bucket of water but I store awesome moments you will like to<br/>
        have in coming years.</p>
    <form action="" class="mt-10">
      <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 ">Email</label>
          <input  type="email" id="email" class=" border border-solid border-black p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      </div>
    <div class="mb-4">
      <label for="password" class="block text-sm font-medium text-gray-700 ">Password</label>
      <input type="password" id="password" class=" border border-solid border-black p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
    </div>
      <div class="flex justify-center ">
   <RouterLink to="/Welcome">
    <button  type="submit" class="bg-[#5271FF] hover:bg-blue-700 text-white  py-2 px-10 w-40 rounded"> Login</button>
   </RouterLink>
        
      </div>
    </form>
  </div>
  
  
  </div>
  
  <div class=" md:mt-10 lg:mt-5">
    <footer class="bg-[#60CED4] mt-20 p-5 md:p-10 lg:p-4 text-right md:text-center lg:text-right">
    <p class="text-xs sm:text-sm md:text-base lg:text-lg">Eventful Moments by Place Your Name here</p>
  </footer>
  </div>
  </template>


<script>
import LoginPage from './LoginPage.vue';
import { RouterLink, useRouter } from 'vue-router';
export default{
  props: {
    registrationData: {
      type: Object,
      required: true,
    },
  },
};
</script>
  
  