<script setup lang="ts">
import { useWidgetsStore } from '~/stores/widgets';
import type { Better } from '~/types/widgets/community/better/Better';
import { markRaw } from 'vue';

// Import layout components directly
import BetterLayoutWide from './BetterLayoutWide.vue';
import BetterLayoutNarrow from './BetterLayoutNarrow.vue';

const widgetsStore = useWidgetsStore();

// Find the Better widget in enabled widgets
const betterWidget = computed(() => {
	return widgetsStore.enabledWidgets.find((w) => w.id === 'better') as
		| Better
		| undefined;
});

// Map placement types to component references
const layoutComponentMap = {
	wide: markRaw(BetterLayoutWide),
	narrow: markRaw(BetterLayoutNarrow),
};

// Determine which layout component to use based on current state
const layoutComponent = computed(() => {
	const placement = betterWidget.value?.config.state.placement || 'wide';
	return layoutComponentMap[placement] || layoutComponentMap['wide'];
});
</script>

<template>
	<component :is="layoutComponent" />
</template>
