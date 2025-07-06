<script>
  export const prerender = true;
  let senior = false
  import {service} from "./logic"
  import SelectionBar from "$lib/selectionBar.svelte"
  import {dateRange,timeRange,dateTitle,timeTitle,} from "$lib/dateRange"
	let selectedOption = $state(service.consultation[0])
  let seniorCheck = $state(service.senior[0])
  let price= $derived((selectedOption.price)*seniorCheck.price)

  const handleSubmit=()=>{console.log("sup")}
</script>

<form  onsubmit= {handleSubmit} class= "bg-gradient-to-br from-[#7d1b1f] to-red-700
flex-center flex-col w-[50%] mx-auto my-auto mt-5 rounded-2xl outline-2 outline-black shadow-2xl shadow-cyan-800">

<div class="- flex flex-row space-x-5 mt-5">
{#each service.consultation as element}
<label class="- hover:cursor-pointer">
	<input type="radio" bind:group={selectedOption} value={element} class="mt-2"/>
	{element.label}
</label>
{/each}
</div>

<div>
      <label for="first_name" class="mb-2">Your name</label>
      <input type="text" id="first_name" placeholder="John" class="text-center" required />
</div>

<SelectionBar options={dateRange} selected={dateTitle}/>
<SelectionBar options={timeRange} selected={timeTitle}/>
<div class=" text-xl font-extrabold text-white text-outline">Cost Estimated: ${price.toFixed(2)}</div>
  

<div class="- flex flex-row space-x-5 mt-5">
{#each service.senior as element}
<label class="- hover:cursor-pointer">
	<input type="radio" bind:group={seniorCheck} value={element} class="mt-2"/>
	{element.label} 
</label>
{/each}
</div>

<button type="submit" class=" bg-white hover:bg-green-400 px-10">Submit</button>
</form>

<style>
:global(.svelte-select) {
  --rmsc-primary: #d97706;
  --rmsc-primary-hover: #b45309;
}
</style>