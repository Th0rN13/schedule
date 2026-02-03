<script lang="ts">
	import SettingsControl from './SettingsControl.svelte';
	import DownloadControl from './DownloadControl.svelte';
</script>

<div class="control">
	<SettingsControl />
	<DownloadControl />
</div>

<style>
	.control {
		display: flex;
		gap: 20px;
		width: 100%;
		align-items: flex-end;
	}
</style>
