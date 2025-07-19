<script>
//function for logging out

function logout() {
localStorage.removeItem('token');
window.location.href = '/admin';

}

//buttons
let menu = ['Dashboard', 'Service Management', 'Appointment Management', 'View Site'];
let selectedChoice = menu[0];

</script>

<main>
 <div class="flex justify-end items-center mt-3 mr-4">
    <a href="#" on:click={logout} class="text-red-600 hover:text-red-800">Log Out</a>
  </div>
<div class="flex flex-wrap justify-center mt-3 gap-3">
{#each menu as category}
<div
        class={`px-4 py-2 font-semibold bg-red-400 border border-black text-white
                ${selectedChoice === category
                ? 'bg-red-800' 
                  : 'text-red-800'}`}
                  on:click={() => selectedChoice = category} 
                  >
                  {category}
                 </div>
            {/each}
        </div>
</main>