<script>
// import { appointment } from "$lib/appointment";
import {onMount} from "svelte"
let appointment=[];
  let choices = [];
  let selectedChoice;
  let priceMenu = [];
onMount(async()=>{
const res=await fetch("http://localhost:3000/appointment")
appointment=await res.json();
console.log(appointment)
  choices = [...new Set(appointment.map(t=>t.date))];
  selectedChoice = choices[0];
  priceMenu = appointment.filter(t=>t.date ===selectedChoice);
})

 const filterMenu = (date) => {
  selectedChoice = date;
  priceMenu = appointment.filter(t=>t.date ===selectedChoice);
 }

</script>


  <div class="flex flex-wrap justify-center mt-3">
 
    {#each choices as element}
      <div
        class={`px-4 py-2 font-semibold bg-red-400 border border-black text-white
                ${selectedChoice === element
                  ? 'bg-red-800' 
                  : 'text-red-800'}`}
        onclick={() => filterMenu(element)}
      >
        {element}
        </div>
    {/each}
    </div>
 

 <!-- create an "outer container and make it flex. inner container will be centered with 16 pexels of space on left and right side of inner container -->
<div class="w-full flex justify-center px-4">  
  <!-- Limit the width on larger screens and stack cards vertically -->
  <div class="w-full max-w-4xl flex flex-col gap-4 mt-5">
    {#each priceMenu as element}
      <div class="bg-red-800 text-white text-md font-semibold rounded-xl p-4 shadow">
        <div class="mb-1 text-lg font-bold">{element.name}</div>
        <div class="mb-2 text-sm">{element.time}</div>
        <div class="text-right text-md font-bold">Total price roughly: ${element.price}</div>
      </div>
    {/each}
  </div>
</div>

    
