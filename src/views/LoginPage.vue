<template>
   <div class="">
    <nav class="bg-[#008289] flex justify-between py-5">
    <div >
      <h3 class="ml-10 text-[#FFFFFF] italic font-Poppins font-bold">Eventful Moments.</h3>
    </div>
  
    <ul class="flex space-x-5 mr-20 text-[#FFFFFF]  font-Poppins ">
      <li><a href="/">Login</a></li>
      <li><a href="/">Register</a></li>
    </ul>
    </nav>


    <div class="flex justify-center  ">
      <div class="sm:mt-20  p-4 ">
        <h1 class="ml-150 sm:text-4xl font-bold">Create Account,</h1>
     
     
    <div   class="mt-10  lg:w-400 h-500 p-8 " >
      <div class="mb-4">
         
          <label for="fullName" class="lg:ml-145 block text-sm font-medium text-gray-700 ">Full name</label>
          <input v-model="fullName" type="text" id="full-name" class=" mx-auto border border-solid border-black  mt-1 block  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 lg:w-95 p-4 md:w-85 p-2 sm: w-[300px]  " >
      
        </div>
    <div class="mb-4">
      <label for="email" class="lg:ml-145 block text-sm font-medium text-gray-700 ">Email</label>
      <input v-model="email" type="email" id="password" class="mx-auto border border-solid border-black  mt-1 block  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 lg:w-95 p-4 md:w-85 p-2 z  " >
    </div>

    <div class="mb-4">
      <label for="password" class="lg:ml-145 block text-sm font-medium text-gray-700 ">Password</label>
      <input v-model="password" type="password" id="password" class="mx-auto border border-solid border-black  mt-1 block  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 lg:w-95 p-4 md:w-85 p-2   " required>
    </div>
      <div class="flex justify-center mt-20">
       
     <button @click="clickSubmit"  type="submit" class="bg-[#5271FF] hover:bg-blue-700 text-white  py-2 px-10 w-40 rounded"> Create</button>
       
          
      </div>
      
      </div>
    </div>
  </div>
  
  <div >
          <footer class="bg-[#60CED4]   p-5 md:p-10 lg:p-4 text-right md:text-center lg:text-right">
              <p class="text-xs sm:text-sm md:text-base lg:text-lg">Eventful Moments by Place Your Name here</p>
          </footer>
  </div>
   </div>
  
  
  
  
</template>

    <script setup>
  import  { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

    const $router =useRouter();
    const fullName = ref('');
    const email = ref('');
    const password = ref('');



    function clickSubmit(){
      if(fullName.value !== '' && email.value !== ''){
      $router.push({path: '/'})
    } else{
      alert('Please enter required fields')
    }
    }
  </script>