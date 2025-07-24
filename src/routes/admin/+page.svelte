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
<label for ="email" class="text-black">Email:</label>
<input id = "email"
type="email"
bind:value={email}
required
class=" mt-1 p-2 border border-black rounded-md"
/>

</div>

 <div>
<label for ="password" class="text-black">Password:</label>
<input id ="password"
type="password"
bind:value={password}
required 
class=" mt-1 p-2 border border-black rounded-md"
/>
</div> 

<div>
<button type = "submit">Sign In</button>
</div>
</form>


</main>


