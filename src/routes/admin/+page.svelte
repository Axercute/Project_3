<script>
import { signIn } from '$lib/authService';
import { goto } from '$app/navigation';

let email = $state("");
let password = $state("");;
let message = $state("");;

//Handle form submission
const handleSubmit = async (event) => {

try {
    const formData = {email, password};
    const user = await signIn(formData); 

    message = 'Successfully logged in';
    goto('/dashboard');
    } catch (err) {
    message = err.message; 
    }
};

</script>




<main>
<form onsubmit={handleSubmit}>
<div>
<label for ="email">Email:</label>
<input id = "email"
type="email"
bind:value={email}
required
/>

</div>

<div>
<label for ="password">Password:</label>
<input id ="password"
type="password"
bind:value={password}
required 
/>
</div> 

<div>
<button type = "submit">Sign In</button>
</div>
</form>




{#if message}
<p>{message}</p>
{/if}
</main>