<script type="ts">
	import { userData } from '../../data';
import { safety, safetyForm, teamName } from '../../config';
  let responses: Array<string>= [];

  
</script>

{#if safety}
<div class="2xl:mx-96 xl:mx-70 lg:mx-48 md:mx-32 mx-4 flex flex-col">
	<h1 class="text-main font-sans lg:text-5xl text-2xl text-center my-4">Submit a Safety Report</h1>
	<form class="grid grid-cols-1">
    {#each safetyForm as question, i}
    <div class="flex flex-col">
      <label for={question.name} class="lg:mx-auto lg:w-1/3 mx-16 px-1 lg:text-2xl text-base dark:text-white">{question.label}
      {#if question.required}
        <b class="text-red-500">*</b>
      {/if}
      </label>
      <input type="text" name={question.name} required={question.required} class="lg:mx-auto lg:w-1/3 mx-16 px-2 py-4 mb-10 rounded dark:bg-background-accent-dark dark:text-white border-2 dark:border-none" bind:value={responses[i]}>
    </div>
    {/each}
    <div class="flex flex-row lg:w-1/3 lg:mx-auto mx-16">
      {#if $userData.type == "member"}
      <a class="lg:w-1/6 w-1/4 bg-slate-400 text-black mr-2 py-4 rounded hover:bg-accent hover:brightness-95 active:brightness-90 text-center" href="/">
        Back
      </a>
      {:else}
      <a class="lg:w-1/6 w-1/4 bg-slate-400 text-black mr-2 py-4 rounded hover:bg-accent hover:brightness-95 active:brightness-90 text-center" href="/safety/menu">
        Back
      </a>
      {/if}
      <button type="reset" class="lg:w-1/6 w-1/4 bg-red-500 text-black mx-2 py-4 rounded hover:bg-accent hover:brightness-95 active:brightness-90">
        Clear
      </button>
      <button type="submit" class="lg:w-4/6 w-2/4 bg-main text-main-text ml-2 py-4 rounded hover:bg-accent hover:brightness-95 active:brightness-90">
        Submit
      </button>
    </div>
  </form>
</div>
{:else}
<div class="2xl:mx-96 xl:mx-70 lg:mx-48 md:mx-32 mx-4 flex flex-col">
    <h1 class="text-main font-sans lg:text-7xl text-5xl text-center my-4">{teamName}</h1>
    <p class="text-main-text font-sans lg:text-4xl text-2xl text-center my-4">Sorry, your team has disabled this feature.</p>
    <a class="bg-main text-main-text lg:text-2xl mx-10 my-5 lg:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="../">Return Home</a>
</div>
{/if}