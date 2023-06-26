// stores.js
import { writable } from 'svelte/store';

// Create a store with an initial value of true
export const isShown = writable(false);
