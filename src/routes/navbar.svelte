<script>
  import {goto} from "$app/navigation"
  import {navBarInfo} from "$lib/navBarInfo"
  let open = true
  const toggleOpen =(event)=>{event.stopPropagation();open=true}
  const toggleClose =()=>{open=false}
  import { onMount} from 'svelte';
  onMount(() => {
  window.addEventListener('click', toggleClose);
  });
</script>
<img src="/mainlogo.png"alt="Tui na" class="w-[20%] h-[8%] bg-gradient-to-br from-[#7d1b1f] to-red-800 absolute left-0 top-0 z-10 border-3
    border-black text-2xl  text-white text-center" onclick={toggleOpen}/>
<nav                                                      
  class={`transition-[left] duration-500 ease-in-out ${open ? 'left-0' : '-left-1/2'}`}>
        <div class="flex flex-row text-left font-semibold" onclick={toggleClose}>
        <img src="/mainlogo.png"alt="Tui na" class="w-[40%] h-[8%] mr-3 hover:cursor-pointer"/></div>
        {#each navBarInfo as {display,path}}
        <div onclick={()=>{goto(`/${path}`);toggleOpen()}} class="text-left font-semibold ml-2">{display}</div> 
        {/each}
        <div class=" bg-amber-600 m-2 text-white text-left font-semibold">Grand Opening Sale! Consultation + TuiNa + Cupping / Scraping for only $42
        <img src="/tuipic.jpg"alt="Tui na" class="w-full mr-3 hover:cursor-pointer"/>
        </div>  
    </nav>
<style lang="postcss">
  @reference "tailwindcss";
</style>