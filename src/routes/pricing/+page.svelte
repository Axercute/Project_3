<script>
  import { treatment } from '$lib/treatment';

  let selectedCategory = null;
  let categories = [...new Set(treatment.map(item => item.category))];
  let filtered = [];

  function selectCategory(category) {
    selectedCategory = category;
    filtered = treatment.filter(item => item.category === selectedCategory);
  }
</script>

<div class="container">
  <!-- Category Buttons -->
  <div class="flex flex-wrap justify-center mb-4 text-white">
    {#each categories as category}
      <button
        class={`btn ${selectedCategory === category ? 'active' : ''} bg-red-800`}
        onclick={() => selectCategory(category)}
      >
        {category}
      </button>
    {/each}
  </div>

  <!-- Treatment Cards -->
  {#if filtered.length}
    {#each filtered as item}
      <div class="card">
        <div class="text-lg font-bold">{item.english_name}</div>
        <div class="text-sm text-gray-600">{item.chinese_name}</div>
        <div class="text-red-800 font-semibold mt-1">${item.starting_price}</div>
      </div>
    {/each}
  {:else if selectedCategory}
    <p class="text-center text-gray-500">No treatments in this category.</p>
  {/if}
</div>
