<script lang="ts">
	import { configStore } from '$lib/stores/config';
	import RangeSlider from 'svelte-range-slider-pips';
	import Section from './UI/Section.svelte';

	let currentColor = $state($configStore.textColor);
	let centerTextOffset = $state($configStore.centerTextOffset);

	function toggleCanvas() {
		configStore.toggleCanvas();
	}

	function toggleGrid() {
		configStore.toggleGrid();
	}

	function setColor() {
		configStore.setColor(currentColor);
	}

	function setcenterTextOffset() {
		configStore.setcenterTextOffset(centerTextOffset);
	}
</script>

<Section title="Настройки дизайна">
	<div class="control-group">
		<label class="control-label">
			<span>Цвет текста</span>
			<input type="color" bind:value={currentColor} class="color-input" onchange={setColor} />
		</label>
	</div>

	<div class="control-group">
		<label class="control-label">
			<span>Сдвиг центрального текста</span>
			<RangeSlider
				bind:value={centerTextOffset}
				min={-400}
				max={100}
				float
				on:change={setcenterTextOffset}
			></RangeSlider>
		</label>
	</div>
	<div class="button-group">
		<button class="btn btn-secondary" onclick={toggleCanvas}>
			<span class="icon">🖼️</span>
			Увеличить
		</button>
		<button class="btn btn-secondary" onclick={toggleGrid}>
			<span class="icon">📐</span>
			Сетка
		</button>
	</div>
</Section>
