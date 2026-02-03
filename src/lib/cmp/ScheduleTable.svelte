<script lang="ts">
	import { dayTexts, slotNames } from '$lib/constants';
	import { schedulesStore } from '$lib/stores/schedule';
	import ScheduleDay from './ScheduleDay.svelte';
	import SheduleInput from './SheduleInput.svelte';
	import Section from './UI/Section.svelte';
	dayTexts;
</script>

<Section title="Временные слоты">
	<div class="schedule-list">
		{#each dayTexts as day, dayIdx}
			<ScheduleDay {day} {dayIdx} />
		{/each}
	</div>
</Section>
