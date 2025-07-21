<script>
    import {page} from "$app/state"
    const appointmentId=page.params.appointmentId
    let appointment=$state("")
    import {onMount} from "svelte"
     onMount (async () => {
  const res = await fetch(`http://localhost:3000/appointment/${appointmentId}`);
  let data = await res.json()
  appointment=data
 });    
</script>
{#if appointment}
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="max-w-xl w-full p-6 bg-white shadow-lg rounded-2xl space-y-5">
      <h2 class="text-2xl font-semibold text-gray-800">👋 Hi {appointment.appointment.name}</h2>

      <div class="text-lg text-gray-700">
        📅 You have an upcoming appointment on 
        <span class="font-medium text-indigo-600">{appointment.appointment.date}</span> 
        at 
        <span class="font-medium text-indigo-600">{appointment.appointment.time}</span>.
      </div>

      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">💆‍♂️ Treatments booked:</h3>
        <ol class="list-decimal list-inside text-gray-700">
          {#each appointment.appointment.treatments as element}
            <li>{element.english_name}</li>
          {/each}
        </ol>
      </div>
      {#if appointment.appointment.extraComments}
    <div>You have also requested...</div>
    <div>{appointment.appointment.extraComments}</div>
    {/if}
      <div class="text-lg text-gray-800">
        💵 Estimated price: 
        <span class="font-semibold text-green-600">${appointment.appointment.price.toFixed(2)}</span>
      </div>
    </div>
  </div>
{:else}
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <p class="text-gray-500 text-lg animate-pulse">Loading your appointment...</p>
  </div>
{/if}
