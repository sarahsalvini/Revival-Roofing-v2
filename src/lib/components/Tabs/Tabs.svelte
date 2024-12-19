<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let tabs: any[] = [];
</script>

<div
	class="tabs text-sm font-semibold text-center text-navy border-navy dark:text-white dark:border-white"
>
	{#if tabs.length}
		<ul class="flex flex-wrap -mb-px">
			{#each tabs as tab}
				<li class="me-2">
					<button
						class:border-transparent={!tab.active}
						class:border-powder={tab.active}
						class:text-powder={tab.active}
						on:click={() => {
							tabs.forEach((t) => (t.active = false));
							tab.active = true;
							dispatch('tabChange', tab.key);
						}}
						class="inline-block p-4 border-b-2 border-powder rounded-t-lg hover:text-powder dark:hover:text-powder uppercase"
						>{tab.title}</button
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>
