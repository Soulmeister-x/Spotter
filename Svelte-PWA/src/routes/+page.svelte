<script lang="ts">
  import { onMount } from 'svelte';
  import { addLocation, getLocations, clearLocations } from '../lib/storage';

  let locations: { latitude: number; longitude: number; timestamp: number }[] = [];
  let error: string | null = null;

  onMount(async () => {
    await loadLocations();
  });

  async function loadLocations() {
    locations = await getLocations();
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation = { latitude, longitude, timestamp: Date.now() };
          await addLocation(newLocation);
          await loadLocations();
          error = null;
        },
        (err) => {
          error = err.message;
        }
      );
    } else {
      error = 'Geolocation is not supported by this browser.';
    }
  }

  async function handleClearLocations() {
    await clearLocations();
    await loadLocations();
  }
</script>

<div class="text-center">
  <h1 class="text-3xl font-bold mb-8">Spotter</h1>

  <button on:click={getLocation} class="w-full max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-xl shadow-lg">
    Get Current Location
  </button>

  {#if error}
    <div class="mt-8 p-4 bg-red-100 text-red-700 rounded-lg">
      <p>{error}</p>
    </div>
  {/if}

  <div class="mt-8">
    <h2 class="text-2xl font-bold mb-4">Saved Locations</h2>
    {#if locations.length > 0}
      <ul class="space-y-4">
        {#each locations as location}
          <li class="p-4 bg-gray-100 rounded-lg text-left">
            <p><strong>Latitude:</strong> {location.latitude}</p>
            <p><strong>Longitude:</strong> {location.longitude}</p>
            <p><strong>Timestamp:</strong> {new Date(location.timestamp).toLocaleString()}</p>
          </li>
        {/each}
      </ul>
      <button on:click={handleClearLocations} class="mt-8 w-full max-w-xs bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-lg shadow-lg">
        Clear All Locations
      </button>
    {:else}
      <p>No locations saved yet.</p>
    {/if}
  </div>
</div>

