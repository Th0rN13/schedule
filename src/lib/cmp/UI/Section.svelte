<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div class="section">
	<h2 class="section-title">{title}</h2>
	{@render children()}
</div>

<style>
	.section {
		display: flex;
		width: 100%;
		flex-direction: column;
	}

	.section-title {
		font-size: 12px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: var(--text-secondary);
		margin-bottom: 12px;
	}
</style>
