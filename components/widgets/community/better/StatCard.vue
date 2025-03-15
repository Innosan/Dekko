<script setup lang="ts">
import type { TeamStat } from '~/types/widgets/community/better/TeamStat';

const props = defineProps({
	stat: {
		type: Object as PropType<TeamStat>,
		required: true,
	},
});
</script>

<template>
	<TitledBlock
		:title="stat.title"
		class="p-2 ring-1 rounded-xl ring-zinc-700 text-nowrap"
	>
		<p class="font-bold text-lg">
			<AnimatedNumber
				:value="stat.value"
				:fraction="stat.fraction"
				:sign="stat.sign"
			/>
		</p>
	</TitledBlock>
</template>
