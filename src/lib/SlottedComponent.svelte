<script>
    export let item;
</script>



<div class="container">
    <h2>I am always going to be rendered {item.value}</h2>
    <slot name="namedSlot" prop={item}></slot>
</div>



<style>
    .container{
        width: 100%;
        margin: auto;
    }

</style>
