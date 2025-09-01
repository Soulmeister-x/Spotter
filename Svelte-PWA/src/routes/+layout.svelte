<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';

	let { children } = $props();
	let online = $state(true);

	onMount(() => {
		online = navigator.onLine;

		window.addEventListener('online', () => (online = true));
		window.addEventListener('offline', () => (online = false));

		return () => {
			window.removeEventListener('online', () => (online = true));
			window.removeEventListener('offline', () => (online = false));
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	{#if !online}
		<div class="offline-banner">You are currently offline.</div>
	{/if}
	<main class="flex-grow p-4">
		{@render children?.()}
	</main>

	<nav class="fixed inset-x-0 bottom-0 border-t bg-white shadow-lg">
		<div class="flex justify-around">
			<a href="/" class="p-4 text-center text-gray-700 hover:bg-gray-100">
				<!-- Replace with an icon later -->
				<span>Home</span>
			</a>
			<a href="/locations" class="p-4 text-center text-gray-700 hover:bg-gray-100">
				<!-- Replace with an icon later -->
				<span>Locations</span>
			</a>
			<a href="/sync" class="p-4 text-center text-gray-700 hover:bg-gray-100">
				<!-- Replace with an icon later -->
				<span>Sync</span>
			</a>
			<a href="/profile" class="p-4 text-center text-gray-700 hover:bg-gray-100">
				<!-- Replace with an icon later -->
				<span>Profile</span>
			</a>
		</div>
	</nav>
</div>
