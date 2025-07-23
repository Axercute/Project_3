<script>

import { goto } from '$app/navigation';
import { onMount } from 'svelte'

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
    { display: 'View Site', path: '' },
  ];

//buttons
//let menu = ['Dashboard', 'Service Management', 'Appointment Management', 'View Site'];

let selectedChoice = menu[0];
let appointments = [];

//handling navigation

  const handleNavigation = (category) => {
    selectedChoice = category; // Update selected category
    if (category.path === 'dashboard') {
    goto('/dashboard');
  } else if (category.path === '') {
    goto('/');
  }else if (category.path) {
    goto(`/dashboard/${category.path}`); // Navigate based on path inside dashboard
  }
  };
  //fetch today's appointments

  onMount(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      goto('/admin');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        window.location.href = '/admin';
        return;
      }

      if (!res.ok) {
        throw new Error('Failed to fetch appointments');
      }

      const data = await res.json();
      appointments = data.appointments || [];  // Set the appointments data
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  });


 
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

        {#if appointments.length > 0}
    <h2>Your Appointments Today</h2>
    <ul>
      {#each appointments as appointment}
        <li>
          <p><strong>{appointment.name}</strong></p>
          <p>{appointment.date} at {appointment.time}</p>
          <p>Treatments: {appointment.treatments.join(', ')}</p>
          <p>Price: ${appointment.price}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No appointments today.</p>
  {/if}
</main>