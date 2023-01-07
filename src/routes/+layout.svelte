<script>
    import Navbar from "../lib/Navbar.svelte";
	import { page } from "$app/stores";


</script>


<Navbar />



{#if $page.url.pathname === '/about'}
<div class="about-container">
    <div class="item">
        <h1>I am the default header for About</h1>
        <slot></slot>
    </div>
</div>
{:else}
    <div class="container">
        <slot></slot>
    </div>
{/if}


<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .about-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>







