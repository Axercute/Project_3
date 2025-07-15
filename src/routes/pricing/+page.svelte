<script>
 
 import { onMount } from 'svelte';
  let treatments = [];
  let choices = [];
  let selectedChoice;
  let priceMenu = [];

 onMount (async () => {
  const res = await fetch('http://localhost:3000/services');
  treatments = await res.json();
  choices = [...new Set(treatments.map(t=>t.category))];
  selectedChoice = choices[0];
  priceMenu = treatments.filter(t=>t.category ===selectedChoice);

 });

 const filterMenu = (category) => {
  selectedChoice = category;
  priceMenu = treatments.filter(t=>t.category ===selectedChoice);
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

  <!-- Treatment Cards -->
    <div class="flex flex-wrap gap-x-5 gap-y-5 m-5">
      {#each priceMenu as element}
        <div class="bg-red-800 border-white text-white text-md font-semi-bold rounded-2xl">
        <div class="m-2"><strong>{element.english_name}</strong></div>
        <div class="m-2">{element.description}</div>
        <div class="text-right m-2"><strong>${element.starting_price}</strong></div>
        </div>
      {/each}
    </div>

    
