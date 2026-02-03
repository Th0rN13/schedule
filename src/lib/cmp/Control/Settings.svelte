<script lang="ts">
	import { configStore } from '$lib/stores/config';
	import RangeSlider from 'svelte-range-slider-pips';
	import Section from '../UI/Section.svelte';
	import ButtonGroup from '../UI/ButtonGroup.svelte';
	import Button from '../UI/Button.svelte';

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
	<ButtonGroup>
		<Button onclick={toggleCanvas} icon="picture" label="Увеличить" />
		<Button onclick={toggleGrid} icon="grid" label="Сетка" />
	</ButtonGroup>
</Section>
