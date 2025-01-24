// $lib/stores/lightbox.js
import { writable } from 'svelte/store';

function createLightboxStore() {
	const { subscribe, set } = writable({ isOpen: false, image: null });

	return {
		subscribe,
		open: (image) => set({ isOpen: true, image }),
		close: () => set({ isOpen: false, image: null })
	};
}

export const lightbox = createLightboxStore();