<script lang="ts">
	import Control from './Control/Control.svelte';
	import ScheduleTable from './Schedule/ScheduleTable.svelte';
</script>

<!-- Sidebar -->
<aside class="sidebar">
	<div class="sidebar-header">
		<h1>📅 Расписание</h1>
		<p class="subtitle">Редактор расписания</p>
	</div>

	<div class="sidebar-content">
		<ScheduleTable />
		<Control />
	</div>
</aside>

<style>
	.sidebar {
		width: 900px;
		background: var(--surface);
		border-right: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: var(--shadow-md);
		z-index: 10;
		flex-shrink: 0;
	}

	.sidebar-header {
		padding: 16px 20px;
		border-bottom: 1px solid var(--border);
		background: linear-gradient(135deg, var(--primary-color) 0%, #8b5cf6 100%);
		color: white;
	}

	.sidebar-header h1 {
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 2px;
	}
	.subtitle {
		font-size: 13px;
		opacity: 0.9;
	}

	.sidebar-content {
		flex: 1;
		overflow: hidden;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: space-between;
	}
</style>
