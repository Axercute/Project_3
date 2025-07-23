<script>

import { goto } from '$app/navigation';



//function for logging out

function logout() {
localStorage.removeItem('token');
window.location.href = '/admin';

}
export let data;

  const menu = [
    { display: 'Dashboard', path: 'dashboard' },
    { display: 'Service Management', path: 'service-management' },
    { display: 'Appointment Management', path: 'appointment-management' },
    { display: 'View Site', path: 'view-site' },
  ];

//buttons
//let menu = ['Dashboard', 'Service Management', 'Appointment Management', 'View Site'];

let selectedChoice = menu[0];

//handling navigation

  const handleNavigation = (category) => {
    selectedChoice = category; // Update selected category
    if (category.path) {
      goto(`/dashboard/${category.path}`); // Navigate based on path
    }
  };

 
</script>

<main>

 <div class="flex justify-end items-center mt-3 mr-4">
    <a href="#" on:click={logout} class="text-red-600 hover:text-red-800">Log Out</a>
  </div>

<h1>Welcome, {data.user?.name || 'User'}!</h1> 
 {#if data.message}
    <p class="text-green-500">{data.message}</p>  <!-- Display message if it exists -->
  {/if}

<div class="flex flex-wrap justify-center mt-3 gap-3">
{#each menu as category}
<div
        class={`px-4 py-2 font-semibold bg-red-400 border border-black text-white
                ${selectedChoice === category
                ? 'bg-red-800' 
                  : 'text-red-800'}`}
                  on:click={() => handleNavigation(category)} 
                  >
                  {category.display}
                 </div>
            {/each}
        </div>
</main>