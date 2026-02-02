<script lang="ts">
	import { configStore } from '$lib/stores/config';

	function toggleCanvas() {
		configStore.toggleCanvas();
	}

	function toggleGrid() {
		configStore.toggleGrid();
	}
</script>

<!-- Customization -->
<div class="section settings-section">
	<h2 class="section-title">Настройки дизайна</h2>

	<div class="control-group">
		<label class="control-label">
			<span>Цвет текста</span>
			<input type="color" id="textColor" value="#000000" class="color-input" />
		</label>
	</div>

	<div class="control-group">
		<label class="control-label">
			<span>Сдвиг центрального текста</span>
			<div class="slider-container">
				<input type="range" id="textOffset" min="0" max="100" value="80" class="slider" />
				<span class="slider-value" id="offsetValue">80%</span>
			</div>
		</label>
	</div>
</div>

<!-- Actions -->
<div class="section export-section">
	<h2 class="section-title">Экспорт</h2>
	<div class="button-group">
		<button class="btn btn-secondary" onclick={toggleCanvas}>
			<span class="icon">🖼️</span>
			Изображение
		</button>
		<button class="btn btn-secondary" onclick={toggleGrid}>
			<span class="icon">📐</span>
			Сетка
		</button>
		<button class="btn btn-primary">
			<span class="icon">⬇️</span>
			Большое
		</button>
		<button class="btn btn-primary">
			<span class="icon">⬇️</span>
			Маленькое
		</button>
	</div>
</div>
