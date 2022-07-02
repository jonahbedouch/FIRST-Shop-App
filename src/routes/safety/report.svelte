<script>
	import { safety, teamName } from '../../config';
</script>

{#if safety}
<div class="2xl:mx-96 xl:mx-70 lg:mx-48 md:mx-32 mx-4 flex flex-col">
	<h1 class="text-main font-sans md:text-7xl text-5xl text-center my-4">{teamName}</h1>
	<div class="grid md:grid-cols-2 grid-cols-1">

  </div>
</div>
{:else}
<div class="2xl:mx-96 xl:mx-70 lg:mx-48 md:mx-32 mx-4 flex flex-col">
    <h1 class="text-main font-sans md:text-7xl text-5xl text-center my-4">{teamName}</h1>
    <p class="text-main-text font-sans md:text-4xl text-2xl text-center my-4">Sorry, your team has disabled this feature.</p>
    <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="../">Return Home</a>
</div>
{/if}