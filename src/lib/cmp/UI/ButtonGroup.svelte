<script lang="ts">
	import type { Snippet } from 'svelte';

	interface PropType {
		children: Snippet;
	}
	let { children }: PropType = $props();
</script>

<div class="button-group">{@render children()}</div>

<style>
	.button-group {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px;
	}
</style>
