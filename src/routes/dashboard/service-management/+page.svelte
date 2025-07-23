<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  let services = [];
 

//on mount function that fetches the data
  onMount(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      goto('/admin');
      return;
    }

    const res = await fetch('http://localhost:3000/serviceManagement', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      window.location.href = '/admin';
      return;
    }

    if (!res.ok) {
      throw new Error('Failed to load services data');
    }

    services = await res.json();
    console.log('Fetched services data:', services);
  });

  // Function to delete service
  async function deleteService(serviceId) {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/admin';
      return;
    }

    // Send DELETE request to backend
    const res = await fetch(`http://localhost:3000/serviceManagement/${serviceId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
// Remove the service from the local list if deletion was successful
      services = services.filter(service => service._id !== serviceId);
      console.log('Service deleted successfully');
    } else {
      console.error('Failed to delete service');
    }
  }
</script>



  <table>
    <thead>
      <tr>
        <th>English Name</th>
        <th>Chinese Name</th>
        <th>Category</th>
        <th>Description</th>
        <th>Starting Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each services as service}
        <tr>
          <td>{service.english_name}</td>
          <td>{service.chinese_name}</td>
          <td>{service.category}</td>
          <td>{service.description}</td>
          <td>${service.starting_price}</td>
          <td><button on:click={() => deleteService(service._id)}>Delete</button></td>
        </tr>
      {/each}
    </tbody>
  </table>

