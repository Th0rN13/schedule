<script lang="ts">
	import background from '$lib/sapa_bg.png';
	import { configStore } from '$lib/stores/config';
	import { schedulesStore } from '$lib/stores/schedule';
	import { Stage, Layer, Image, Text } from 'svelte-konva';
	import { stageStore } from '$lib/stores/stage';
	import { CanvasService } from '$lib/services/CanvasService';

	let stage: Stage | undefined = $state();
	let image: HTMLImageElement | undefined = $state(undefined);

	$effect(() => {
		if (stage) {
			stageStore.updateSmall(stage);
		}
		const img = document.createElement('img');
		img.src = background;
		img.crossOrigin = 'Anonymous';
		img.onload = () => {
			image = img;
		};
	});

	const titleConfig = $derived(CanvasService.generateSmallTitleConfig($configStore));
	const slotConfigs = $derived(
		CanvasService.generateSmallLabelsConfigs($schedulesStore, $configStore)
	);
	const textConfigs = $derived(
		CanvasService.generateSmallTextConfigs($schedulesStore, $configStore)
	);
</script>

<div class="wrap">
	<Stage width={400} height={550} bind:this={stage}>
		<Layer>
			<Image {image} x={-700} y={-50} />
			<Text {...titleConfig} />
			{#each slotConfigs as textConfig}
				<Text {...textConfig} />
			{/each}
			{#each textConfigs as textConfig}
				<Text {...textConfig} />
			{/each}
		</Layer>
	</Stage>
</div>
