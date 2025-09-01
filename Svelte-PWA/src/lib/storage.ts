import { openDB } from 'idb';

const DB_NAME = 'spotter-db';
const DB_VERSION = 1;
const STORE_NAME = 'locations';

async function getDB() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

export async function addLocation(location: { latitude: number; longitude: number; timestamp: number }) {
  const db = await getDB();
  await db.add(STORE_NAME, location);
}

export async function getLocations() {
  const db = await getDB();
  return db.getAll(STORE_NAME);
}

export async function clearLocations() {
  const db = await getDB();
  await db.clear(STORE_NAME);
}
