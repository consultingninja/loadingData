<script>
    export let data;
</script>

<h1>Welcome to Consulting Ninja</h1>
<p>Visit <a href="https://kit.svelte.dev">@Consulting Ninja</a> YouTube channel to see more videos!</p>



{#await data}
<p>Loading...</p>
{:then value}
<p>Loaded data is...</p>
{#each data.universities as university}

<p>{JSON.stringify(university)}</p>
{/each}
{:catch error}
<p>Error loading... {error}</p>
{/await}
