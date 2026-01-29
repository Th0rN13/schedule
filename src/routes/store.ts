import { writable } from 'svelte/store';

// Get the value out of storage on load.
const stored = localStorage.shedule;
// or localStorage.getItem('content')

// Set the stored value or a sane default.
export const lsStore = writable(stored || []);

// Anytime the store changes, update the local storage value.
lsStore.subscribe((value) => (localStorage.shedule = value));
