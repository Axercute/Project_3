<script>
    import {goto} from "$app/navigation"

    const navBarInfo = [
    {display:"Home", path:""},
    {display:"Booking", path:"booking"},
    {display:"Our Pricing", path:"ourpricing"},
    {display:"Contact Us", path:"contactUs"},
    ]
    let open = $state(true)
    const toggleOpen =()=>{open = !open}
</script>
    <nav class={`transition-all duration-300 overflow-hidden ${open? `w-1/2` : `w-0`}`}>
        <div class="flex flex-row text-left font-semibold" onclick={()=>{goto("./"); toggleOpen()}}>
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