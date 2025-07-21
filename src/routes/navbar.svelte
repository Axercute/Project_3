<script>
  import {goto} from "$app/navigation"
  import {navBarInfo} from "$lib/navBarInfo"
  let open = true
  const toggleOpen =(event)=>{event.stopPropagation();open=true}
  const toggleClose =()=>{open=false}
  import { onMount} from 'svelte';
  onMount(() => {
  window.addEventListener('click', toggleClose);
  return () => {
  window.removeEventListener('click', toggleClose);
};
  });
</script>

<div class="flex justify-end items-center bg-gradient-to-br from-[#7d1b1f] to-red-800 sticky top-0 z-10 h-12">
  <img src="/mainlogo.png"alt="Tui na" class="w-[15%] h-12 bg-gradient-to-br from-[#7d1b1f] to-red-800 absolute left-0 top-0 z-10 border-3
    border-black text-2xl  text-white text-center" onclick={()=>{goto(`/`)}}/>
<div class="m-2 w-10 h-8 flex flex-col justify-between cursor-pointer"  onclick={(event)=>{toggleOpen(event)}}>
  <span class="block h-1 bg-white rounded"></span>
  <span class="block h-1 bg-white rounded"></span>
  <span class="block h-1 bg-white rounded"></span>
</div>
</div>

<nav                                                   
  class={`fixed transition-[right] z-11 duration-500 ease-in-out ${open ? 'right-0' : '-right-1/2'}`}>
        <div class="flex flex-row text-left font-semibold" onclick={toggleClose}>
<div class="w-6 h-6 mt-5 relative cursor-pointer -right-40">
  <span class="absolute inset-0 w-full h-1 bg-amber-400 rotate-45 origin-center"></span>
  <span class="absolute inset-0 w-full h-1 bg-amber-400 -rotate-45 origin-center"></span>
</div>
        </div>
        {#each navBarInfo as {display,path}}
        <div onclick={(event)=>{goto(`/${path}`);toggleClose()}} class="text-right font-semibold mr-2">{display}</div> 
        {/each}
        <div class=" bg-amber-600 m-2 text-white text-right font-semibold">Grand Opening Sale! Consultation + TuiNa + Cupping / Scraping for only $42
        <img src="/tuipic.jpg"alt="Tui na" class="w-full mr-3 hover:cursor-pointer"/>
        </div>  
    </nav>
<style lang="postcss">
  @reference "tailwindcss";
</style>