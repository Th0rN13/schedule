<script lang="ts">
	import Icon from './Icon.svelte';

	interface PropType {
		label: string;
		title?: string;
		onclick: () => void;
		isPrimary?: boolean;
		icon?: string;
	}

	let { label, title, onclick, isPrimary, icon }: PropType = $props();
</script>

<button
	class="btn"
	class:btn-primary={isPrimary}
	class:btn-secondary={!isPrimary}
	title={title ?? label}
	{onclick}
>
	{#if icon}
		<Icon label={icon} />
	{/if}
	{label}
</button>

<style>
	.btn {
		padding: 8px 12px;
		border: none;
		border-radius: var(--radius);
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		transition: all 0.2s;
	}

	.btn-primary {
		background: var(--primary-color);
		color: white;
	}

	.btn-primary:hover {
		background: var(--primary-hover);
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
	}

	.btn-secondary {
		background: var(--background);
		color: var(--text-primary);
		border: 1px solid var(--border);
	}

	.btn-secondary:hover {
		background: var(--surface);
		border-color: var(--secondary-color);
	}
</style>
