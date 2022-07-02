<script type="ts">
  import { userData } from '../../data';
	import { safety, teamName } from '../../config';
</script>

{#if safety && $userData.type !== "member"}
<div class="2xl:mx-96 xl:mx-70 lg:mx-48 md:mx-32 mx-4 flex flex-col">
	<h1 class="text-main font-sans md:text-7xl text-5xl text-center my-4">{teamName}</h1>
	<div class="grid md:grid-cols-2 grid-cols-1">
        <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="/safety/report">File a Report</a>
        <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="/safety/view">View Reports</a>
        <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="../">Back</a>
  </div>
</div>
{:else if safety}
<div class="2xl:mx-96 xl:mx-70 lg:mx-48 md:mx-32 mx-4 flex flex-col">
  <h1 class="text-main font-sans md:text-7xl text-5xl text-center my-4">{teamName}</h1>
  <p class="text-main-text font-sans md:text-4xl text-2xl text-center my-4">Sorry, you do not have permission to access this page.</p>
  <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="../">Return Home</a>
</div>
{:else}
<div class="2xl:mx-96 xl:mx-70 lg:mx-48 md:mx-32 mx-4 flex flex-col">
    <h1 class="text-main font-sans md:text-7xl text-5xl text-center my-4">{teamName}</h1>
    <p class="text-main-text font-sans md:text-4xl text-2xl text-center my-4">Sorry, your team has disabled this feature.</p>
    <a class="bg-main text-main-text md:text-2xl mx-10 my-5 md:py-10 py-4 rounded text-center hover:bg-accent hover:brightness-95 active:brightness-90" href="../">Return Home</a>
</div>
{/if}