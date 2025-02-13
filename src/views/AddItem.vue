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


    <div class="ml-19 mt-20">
        <div>
            <p>Date in the future</p>
            <input class="w-[370px] h-[40px] border-[1.5px]  border-[#707070] rounded" type="text"/>
        </div>

        <div>
            <p>Title</p>
            <input class="w-[370px] h-[40px] border-[1.5px]  border-[#707070] rounded" type="text"/>
        </div>

        <div>
            <p>Details</p>
            <textarea class="w-[370px] h-[300px] border-[1.5px]  border-[#707070] rounded" type="text"></textarea>
        </div>

        <div>
           <RouterLink to='/NewEvent'>
            <button class="bg-[#5271FF] mt-10 ml-28 py-2 sm:py-3 md:py-2 px-3 lg:py-2 px-8 rounded-sm sm:rounded-md md:rounded-lg text-sm sm:text-md md:text-lg lg:text-xl text-white ">Save</button>
           </RouterLink>
        </div>
    </div>

    <div class=" md:mt-10 lg:mt-5">
        <footer class="bg-[#60CED4] mt-20 p-5 md:p-10 lg:p-4 text-right md:text-center lg:text-right">
             <p class="text-xs sm:text-sm md:text-base lg:text-lg">Eventful Moments by Place Your Name here</p>
         </footer>
     </div>

    
</template>