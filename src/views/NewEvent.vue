<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

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

    <div>
      <p class="font-bold text-2xl ml-12 mt-10">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum.</p>
      <p class="text-1 ml-12 mt-10">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it <br>looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ <br/> loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty<br/> real.<br/> Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it<br/> looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ <br/>loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty<br/> real.<br/> Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it <br/>looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ <br/>loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty<br/> real.<br/></p>
    </div>

    <div class="flex ml-12 mt-13">
      <div>
        <RouterLink to="/Edit">
          <button class="bg-[#06C3B4] h-[47px] w-[195px] rounded text-white">Edit</button>
        </RouterLink>
      </div>

      <div>
        <button class="bg-[#C34F06] h-[47px] w-[195px] ml-10 text-white rounded">Delete</button>
      </div>
    </div>


    <div class=" md:mt-10 lg:mt-5">
    <footer class="bg-[#60CED4] mt-20 p-5 md:p-10 lg:p-4 text-right md:text-center lg:text-right">
    <p class="text-xs sm:text-sm md:text-base lg:text-lg">Eventful Moments by Place Your Name here</p>
  </footer>
    </div>
</template>