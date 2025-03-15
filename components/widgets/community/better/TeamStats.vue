<script setup lang="ts">
import type { Team } from '~/types/widgets/community/better/Team';

const props = defineProps({
	team: {
		type: Object as PropType<Team>,
		required: true,
	},
});
</script>

<template>
	<div class="flex gap-3 flex-wrap col-span-2">
		<StatCard :stat="team.impliedProbability" />
		<StatCard :stat="team.kellyCriterion" />
		<StatCard :stat="team.suggestedBet" />
		<StatCard :stat="team.expectedValue" />
		<StatCard :stat="team.expectedProfit" />
	</div>
</template>
