<script lang="ts">
	import { configStore } from '$lib/stores/config';
	import { stageStore } from '$lib/stores/stage';
	import { getNearestMonday } from '$lib/utils';
	import RangeSlider from 'svelte-range-slider-pips';

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

	function downloadLarge() {
		let stage = $stageStore.stageLarge;
		stage!.node.toDataURL({
			callback(img: string) {
				let downloadLink = document.createElement('a');
				let url = img.replace(/^data:image\/png/, 'data:application/octet-stream');
				let mondayDate = getNearestMonday();
				downloadLink.setAttribute('download', `${mondayDate}.png`);

				downloadLink.setAttribute('href', url);
				downloadLink.target = '_self';
				downloadLink.click();
			}
		});
	}

	function downloadSmall() {
		let stage = $stageStore.stageSmall;
		stage!.node.toDataURL({
			callback(img: string) {
				let downloadLink = document.createElement('a');
				let url = img.replace(/^data:image\/png/, 'data:application/octet-stream');
				downloadLink.setAttribute('download', 'Shedule_small.png');

				downloadLink.setAttribute('href', url);
				downloadLink.target = '_self';
				downloadLink.click();
			}
		});
	}
</script>

<!-- Customization -->
<div class="section settings-section">
	<h2 class="section-title">Настройки дизайна</h2>

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
</div>

<!-- Actions -->
<div class="section export-section">
	<h2 class="section-title">Экспорт</h2>
	<div class="button-group">
		<button class="btn btn-primary" onclick={downloadLarge}>
			<span class="icon">⬇️</span>
			Большое
		</button>
		<button class="btn btn-primary" onclick={downloadSmall}>
			<span class="icon">⬇️</span>
			Маленькое
		</button>
	</div>
</div>
