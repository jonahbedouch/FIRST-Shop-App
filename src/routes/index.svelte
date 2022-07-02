<script>
	import { timecard, customItems, inventory, safety, teamName } from '../config';
import Auth from './auth.svelte';
import Rooms from './rooms.svelte';
</script>

<div class="2xl:mx-96 xl:mx-70 lg:mx-48 md:mx-32 mx-4 flex flex-col">
	<h1 class="text-main font-sans md:text-7xl text-5xl text-center my-4">{teamName}</h1>
	<div class="grid md:grid-cols-2 grid-cols-1">
    {#if inventory}
      <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="./rooms">Inventory</a>
    {/if}
      {#if safety}
        <button class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded hover:bg-accent hover:brightness-95 active:brightness-90">Safety</button>
      {/if}
      {#if timecard}
        <button class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded hover:bg-accent hover:brightness-95 active:brightness-90">Check In</button>
      {/if}
      {#each customItems as item}
        <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="{item.link}" target="_blank">{item.name}</a>
      {/each}
  </div>
</div>
