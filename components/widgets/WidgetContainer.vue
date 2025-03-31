<!-- components/widgets/WidgetContainer.vue -->
<script setup lang="ts">
import { useWidgetsStore } from '~/stores/widgets';
import { defineAsyncComponent, markRaw } from 'vue';

// Import Better component directly or use async import
import Better from '~/components/widgets/community/better/Better.vue';

const widgetsStore = useWidgetsStore();

// Get widgets for each placement
const sidebarWidgets = computed(() =>
	widgetsStore.getWidgetsByPlacement('sidebar'),
);

const dekkoWidgets = computed(() =>
	widgetsStore.getWidgetsByPlacement('dekko'),
);

const wideWidgets = computed(() => widgetsStore.getWidgetsByPlacement('wide'));

const narrowWidgets = computed(() =>
	widgetsStore.getWidgetsByPlacement('narrow'),
);

// Map widget IDs to actual component references
const componentMap = {
	better: markRaw(Better),
	// Add more widgets here as needed
};

// Component resolution function
const getWidgetComponent = (widgetId: string) => {
	const component = componentMap[widgetId];

	if (!component) {
		console.warn(`No component found for widget ID: ${widgetId}`);
		return 'div';
	}

	return component;
};
</script>

<template>
	<div class="widget-container">
		<p>Sidebar</p>
		<!-- Sidebar widgets -->
		<div class="sidebar-container">
			<component
				v-for="widget in sidebarWidgets"
				:key="widget.id"
				:is="getWidgetComponent(widget.id)"
			/>
		</div>

		<!-- Main content area -->
		<div class="main-content">
			<p>Dekko</p>
			<!-- Dekko widgets -->
			<div class="dekko-area">
				<component
					v-for="widget in dekkoWidgets"
					:key="widget.id"
					:is="getWidgetComponent(widget.id)"
				/>
			</div>

			<p>Wide</p>
			<!-- Wide widgets -->
			<div class="wide-area">
				<component
					v-for="widget in wideWidgets"
					:key="widget.id"
					:is="getWidgetComponent(widget.id)"
				/>
			</div>

			<p>Narrow</p>
			<!-- Narrow widgets -->
			<div class="narrow-area">
				<component
					v-for="widget in narrowWidgets"
					:key="widget.id"
					:is="getWidgetComponent(widget.id)"
				/>
			</div>
		</div>
	</div>
</template>
