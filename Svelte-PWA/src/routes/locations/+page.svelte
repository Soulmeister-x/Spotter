<script lang="ts">
  import { onMount } from 'svelte';
  import { getLocations } from '../../lib/storage';

  let locations: { latitude: number; longitude: number; timestamp: number }[] = [];

  onMount(async () => {
    locations = await getLocations();
  });
</script>

<h1 class="text-3xl font-bold mb-8 text-center">Saved Locations</h1>

{#if locations.length > 0}
  <ul class="space-y-4">
    {#each locations as location}
      <a href={`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`} target="_blank" rel="noopener noreferrer" class="block p-4 bg-white rounded-lg shadow hover:bg-gray-50">
        <li class="text-left">
          <p><strong>Latitude:</strong> {location.latitude}</p>
          <p><strong>Longitude:</strong> {location.longitude}</p>
          <p><strong>Timestamp:</strong> {new Date(location.timestamp).toLocaleString()}</p>
        </li>
      </a>
    {/each}
  </ul>
{:else}
  <p class="text-center text-gray-500">No locations saved yet.</p>
{/if}
