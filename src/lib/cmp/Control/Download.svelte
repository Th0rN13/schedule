<script lang="ts">
	import { stageStore } from '$lib/stores/stage';
	import { getNearestMonday } from '$lib/utils';
	import Button from '../UI/Button.svelte';
	import ButtonGroup from '../UI/ButtonGroup.svelte';
	import Section from '../UI/Section.svelte';

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

<Section title="Скачать">
	<ButtonGroup>
		<Button
			isPrimary
			onclick={downloadLarge}
			label="Большое"
			icon="download"
			title="Скачать большое расписание"
		/>
		<Button
			isPrimary
			onclick={downloadSmall}
			label="Маленькое"
			icon="download"
			title="Скачать маленькое расписание"
		/>
	</ButtonGroup>
</Section>
