<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Ref, computed, ref } from 'vue';




const details ={
    description: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.'
}

const showFullDescription = ref(false);
const toggleFullDescription = ()=>{
    showFullDescription.value =!showFullDescription.value
}

const truncatedDescription = computed (()=>{
    let description = details.description
    if(!showFullDescription.value){
        description = description.substring(0, 90) + '...';
    }
    return description;
});



</script>

<template>
    <div>
        <nav class="bg-[#008289] flex justify-between py-5">
    <div >
      <h3 class="ml-10 text-[#FFFFFF] italic font-Poppins font-bold  ">Eventful Moments.</h3>
    </div>
  
    <ul class="flex space-x-5 mr-2 sm:mr-4 md:mr-6 lg:mr-8 xl:mr-10   text-[#FFFFFF]  font-Poppins ">
      <RouterLink to="/">
        <li>Login</li>
      </RouterLink>
      <RouterLink to="/LoginPage">
        <li>Register</li>
      </RouterLink>
    </ul>
    </nav>


    <div class="flex justify-between mt-2 sm:mt-4 md:mt-6 lg:mt-12 ">
        <div class="sm:ml-10 md:ml-10 lg:ml-12 ">
            <h1 class="font-bold text-3xl sm:font-bold text-2xl md:font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Welcome John Doe,</h1>
            <p class="sm:text-lg md:text-xl lg:text-2 ">Here are items in your eventful moment bucket.</p>
        </div>

        
            <div class="sm:mr-8 md:mr-8 lg:mr-15 ">
                <RouterLink to="/Add">
                    <button class="bg-[#5271FF] py-2 sm:py-3 md:py-2 px-3 lg:py-2 px-4 rounded-sm sm:rounded-md md:rounded-lg text-sm sm:text-md md:text-lg lg:text-xl text-white ">Add item</button>
                </RouterLink>
            </div>
        
    </div>
    </div>

    <div class="md:ml-50 lg:flex justify-between mr-30">
        <div class=" w-[500px]  shadow-lg shadow-[#00000029]-500/50 p-10 lg:w-[700px]  mt-15 mr-15 bg-[#FFF5A7]">
            <p class="font-bold">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC <br/> text De Finibus Bonorum et Malorum.</p>
            <p>{{truncatedDescription}}</p>
            <button @click="toggleFullDescription">
                {{ showFullDescription ? 'Less': 'View Details' }}
            </button>
        </div>
        

        <div class="w-[500px]  shadow-lg shadow-[#00000029]-500/50  p-10 lg:w-[700px] ml-8 mt-15 mr-15">
            <p class="font-bold">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC <br/> text De Finibus Bonorum et Malorum.</p>
            <p>{{truncatedDescription}}</p>
            <button @click="toggleFullDescription">
                {{ showFullDescription ? 'Less': 'View Details' }}
            </button>
        </div>
    </div>

    <div class="ml-14 md:ml-50 lg:flex justify-between mr-30">
        <div class="shadow-lg shadow-[#00000029]-500/50 md:w-[500px]  p-10 lg:w-[700px] ml-8 mt-15 mr-15 bg-[#FFF5A7]">
            <p class="font-bold">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC <br/> text De Finibus Bonorum et Malorum.</p>
            <p>{{truncatedDescription}}</p>
            <button @click="toggleFullDescription">
                {{ showFullDescription ? 'Less': 'View Details' }}
            </button>
        </div>

        <div class="w-[500px]  shadow-lg shadow-[#00000029]-500/50  p-10 lg:w-[700px] ml-8 mt-15 mr-15">
            <p class="font-bold">Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC <br/> text De Finibus Bonorum et Malorum.</p>
            <p>{{truncatedDescription}}</p>
            <button @click="toggleFullDescription">
                {{ showFullDescription ? 'Less': 'View Details' }}
            </button>
        </div>
    </div>

    <div class="mt-20 ml-47 md:ml-90 lg:ml-130 xl:ml-195 ">
        <button  class="bg-[#5271FF] hover:bg-blue-700 text-white  py-3 px-15  rounded "> Load more</button>
    </div>

    <div class=" md:mt-10 lg:mt-5">
    <footer class="bg-[#60CED4] mt-20 p-5 md:p-10 lg:p-4 text-right md:text-center lg:text-right">
    <p class="text-xs sm:text-sm md:text-base lg:text-lg">Eventful Moments by Place Your Name here</p>
  </footer>
  </div>
</template>

<script>
   
   

</script>