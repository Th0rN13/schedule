<script lang="ts">
	import LargeCanvasView from './LargeCanvasView.svelte';
	import SmallCanvasView from './SmallCanvasView.svelte';
	import { fly } from 'svelte/transition';

	let view: 'large' | 'small' = $state('large');

	function toggleView() {
		view = view === 'large' ? 'small' : 'large';
	}
</script>

<main class="preview-area">
	<div class="preview-header">
		<h2>Предпросмотр расписания</h2>
		<button class="btn btn-secondary">
			<span class="icon">🖼️</span>
			Посмотреть полный размер
		</button>
	</div>
	<div class="preview-container">
		<div class="canvas-wrapper">
			<div
				class="preview-content large"
				class:view-large={view === 'large'}
				in:fly={{ x: -2000, duration: 300 }}
				out:fly={{ x: -2000, duration: 300 }}
			>
				<LargeCanvasView />
			</div>

			<div
				class="preview-content small"
				class:view-large={view === 'large'}
				in:fly={{ x: 2000, duration: 300 }}
				out:fly={{ x: 2000, duration: 300 }}
			>
				<SmallCanvasView />
			</div>
		</div>
		<div>
			<button class="btn btn-primary" onclick={toggleView}> ⇄ </button>
		</div>
	</div>
</main>

<style>
	.preview-area {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 20px;
		overflow: hidden;
	}

	.preview-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
		flex-shrink: 0;
	}

	.preview-header h2 {
		font-size: 20px;
		font-weight: 700;
		color: var(--text-primary);
	}

	.preview-container {
		display: flex;
		flex-direction: column;
		background: var(--surface);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		padding: 16px;
		flex: 1;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		max-height: calc(100vh - 120px);
	}

	.canvas-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		width: 100%;
		height: 100%;
		position: relative;
	}

	.preview-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transition: 300ms;
		&.large {
			transform: translate(calc(-2000px - 50%), -50%) scale(0.4);
			&.view-large {
				transform: translate(-50%, -50%) scale(0.4);
			}
		}
		&.small {
			transform: translate(-50%, -50%) scale(1);
			&.view-large {
				transform: translate(calc(2000px - 50%), -50%) scale(1);
			}
		}
	}
</style>
