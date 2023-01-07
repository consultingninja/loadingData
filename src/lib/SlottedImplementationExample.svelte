<script>
    import SlottedComponent from "$lib/SlottedComponent.svelte";
    const items = [{name:'item one', value:1},{name:'item two', value:2},{name:'item three', value:3}]
</script>




<SlottedComponent item={items[0]}>
    <h1 slot="namedSlot" let:prop={passedBack}>Consulting Ninja {passedBack.name}</h1>
</SlottedComponent>