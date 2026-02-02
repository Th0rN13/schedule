<script lang="ts">
	import font from '$lib/Gilroy-Bold.woff';
	import SideBar from '$lib/cmp/SideBar.svelte';
	import Preview from '$lib/cmp/Preview.svelte';

	// function download() {
	// 	stage!.node.toDataURL({
	// 		callback(img: string) {
	// 			let downloadLink = document.createElement('a');
	// 			let url = img.replace(/^data:image\/png/, 'data:application/octet-stream');
	// 			downloadLink.setAttribute('download', 'Shedule.png');

	// 			downloadLink.setAttribute('href', url);
	// 			downloadLink.target = '_self';
	// 			downloadLink.click();
	// 		}
	// 	});
	// }

	// function downloadSmall() {
	// 	stageSmall!.node.toDataURL({
	// 		callback(img: string) {
	// 			let downloadLink = document.createElement('a');
	// 			let url = img.replace(/^data:image\/png/, 'data:application/octet-stream');
	// 			downloadLink.setAttribute('download', 'Shedule_small.png');

	// 			downloadLink.setAttribute('href', url);
	// 			downloadLink.target = '_self';
	// 			downloadLink.click();
	// 		}
	// 	});
	// }
</script>

<SideBar />
<Preview />

<style>
	@font-face {
		font-family: 'Gilroy-Bold';
		font-style: normal;
		font-weight: 400;
		src:
			local('Gilroy-Bold'),
			url('$lib/Gilroy-Bold.woff') format('woff');
	}
</style>
