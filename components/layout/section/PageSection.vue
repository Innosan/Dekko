<script setup lang="ts">
import type { PropType } from 'vue';
import { type SectionSize, SectionSizes } from '~/types/ui/SectionSizes';

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		default: '',
	},
	size: {
		type: Object as PropType<SectionSize>,
		default: () => SectionSizes.md,
	},
	isDivided: {
		type: Boolean,
		default: true,
	},
});
</script>

<template>
	<section
		class="flex flex-col py-5"
		:class="size.sectionSpacing"
	>
		<SectionTitle
			:title="title"
			:icon="icon"
			:size="size"
		/>

		<slot />
	</section>

	<USeparator v-if="isDivided" />
</template>
