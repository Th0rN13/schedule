<script lang="ts">
	import Settings from './Settings.svelte';
	import Download from './Download.svelte';
</script>

<div class="control">
	<Settings />
	<Download />
</div>

<style>
	.control {
		display: flex;
		gap: 20px;
		width: 100%;
		align-items: flex-end;
	}
</style>
