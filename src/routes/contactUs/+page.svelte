<script>
const contactInfo=["6563203959","6582881687"]
import {contactUsInfo} from "$lib/navBarInfo"
let choices = [...new Set(contactUsInfo.map((element)=>{return element.branch}))];
let selectedChoice = choices[0];
let displayMenu = [];
 const filterMenu = (branch) => {
  selectedChoice = branch;
  displayMenu = contactUsInfo.filter((element)=>element.branch ===selectedChoice);
 }
 filterMenu(selectedChoice)
</script>
  <div class="flex flex-wrap justify-center mt-3">
    {#each choices as element}
      <div
        class={`px-4 py-2 font-semibold bg-red-400 border border-black text-white
                ${selectedChoice === element
                  ? 'bg-red-800' 
                  : 'text-red-800'} hover:cursor-pointer hover:bg-red-500`}
        onclick={() => filterMenu(element)}
      >
        {element}
        </div>
    {/each}
    </div>

    
<div  class="bg-gradient-to-br from-[#7d1b1f] to-red-700 p-2 
flex-center flex-col w-[75%] mx-auto mt-50 rounded-2xl outline-2 outline-black shadow-2xl shadow-cyan-800 md:w-1/3">
<section>Our Clinics</section>
<section>Opening Hours：10am-10pm everyday</section>
    {#each displayMenu as element}
        <section>{element.address}</section>
        <a href={`https://wa.me/${element.phone}?text=I would like to ask if you have...`} target="_blank"
        class=" bg-amber-200 p-2 rounded-xl hover:bg-amber-600">Click here to chat with us</a>
        <a href={element.googleMap} target="_blank"
        class=" bg-amber-200 p-2 mt-1 rounded-xl hover:bg-amber-600">Click to our branch</a>
    {/each}
</div>
