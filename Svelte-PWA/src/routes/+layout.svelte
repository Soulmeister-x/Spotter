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
	<main class="flex-grow p-4">
		{@render children?.()}
	</main>

	<div class="absolute right-4 top-4 flex flex-row items-center justify-between">
		<span>{online ? 'online' : 'offline'}</span>
		<span class="online-indicator {online ? 'online' : 'offline'}"></span>
	</div>

	<nav class="fixed inset-x-0 bottom-0 border-t bg-white shadow-lg">
		<div class="flex justify-around">
			<a
				href="/locations"
				class="flex items-center gap-2 p-4 text-center text-gray-700 hover:bg-gray-100"
			>
				<iconify-icon icon="heroicons:map-solid" class="text-2xl"></iconify-icon>
				Locations
			</a>
			<a href="/" class="flex items-center gap-2 p-4 text-center text-gray-700 hover:bg-gray-100">
				<iconify-icon icon="heroicons:home-solid" class="text-2xl"></iconify-icon>
				Home
			</a>
			<a
				href="/profile"
				class="flex items-center gap-2 p-4 text-center text-gray-700 hover:bg-gray-100"
			>
				<iconify-icon icon="heroicons:user-solid" class="text-2xl"></iconify-icon>
				Profile
			</a>
		</div>
	</nav>
</div>
