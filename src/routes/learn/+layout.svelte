
<div class="container">
    <div>
        <h1>Learn About Consulting Ninja</h1>
        <p>Visit <a href="https://kit.svelte.dev">@Consulting Ninja</a> YouTube channel to see more videos!</p>
    </div>
    <div>
        <h2>The learn page contains all kinds of useful learning tools...</h2>
    </div>
    <div>
        <slot></slot>
    </div>

</div>




<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .item{
        align-self: flex-start;
    }
</style>





