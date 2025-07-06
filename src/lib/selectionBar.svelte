<script>
  let open = false;
  export let selected = {}
  export let options = [];
</script>

<div class="w-50 mx-auto relative">
  <div
    class="w-full px-4 py-2 border rounded text-center hover:cursor-pointer "class:bg-white={!open}  class:bg-amber-400={open}
    on:click={() => (open = !open)}
  >
    {selected}
</div>

  {#if open}
    <ul class="absolute w-full border rounded  bg-amber-400 shadow z-10">
      {#each options as element}
          <div class="w-full px-4 py-1 text-center bg-white hover:bg-amber-400 cursor-pointer"
            on:click={() => {
              selected = element;
              open = false;
            }}
          >
            {element}
        </div>
      {/each}
    </ul>
  {/if}
</div>
