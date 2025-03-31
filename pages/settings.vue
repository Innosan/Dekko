<!-- pages/settings/widgets.vue -->
<script setup lang="ts">
import { useWidgetsStore } from '~/stores/widgets';
import { useWidgetCatalogStore } from '~/stores/widget-catalogue';
import type { Widget } from '~/types/widgets/Widget';

definePageMeta({
	title: 'Widget Settings',
	heading: 'Widget Settings',
	description: 'Configure your widgets',
	layout: 'authed',
});

const widgetCatalogStore = useWidgetCatalogStore();
const widgetsStore = useWidgetsStore();

// Check if a widget is enabled
const isWidgetEnabled = (widgetId: string) => {
	return widgetsStore.enabledWidgets.some((w) => w.id === widgetId);
};

// Toggle widget status (enable/disable)
const toggleWidget = (widget: Widget) => {
	if (isWidgetEnabled(widget.id)) {
		widgetsStore.disableWidget(widget.id);
	} else {
		widgetsStore.enableWidget(structuredClone(widget));
	}
};

// Get current state of enabled widget
const getWidgetState = (widgetId: string) => {
	const widget = widgetsStore.enabledWidgets.find((w) => w.id === widgetId);
	return widget?.config.state.title || '';
};
</script>

<template>
	<PageSection
		title="Widget Settings"
		icon="i-heroicons-cog-6-tooth"
		:is-divided="false"
	>
		<UCard>
			<template #header>
				<h2 class="text-xl font-bold">Available Widgets</h2>
			</template>

			<div class="space-y-6">
				<div
					v-for="widget in widgetCatalogStore.availableWidgets"
					:key="widget.id"
					class="border rounded-lg p-4"
				>
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							<UIcon
								:name="widget.icon"
								class="text-lg"
							/>
							<h3 class="text-lg font-semibold">
								{{ widget.title }}
							</h3>
						</div>

						<USwitch
							:model-value="isWidgetEnabled(widget.id)"
							@update:model-value="toggleWidget(widget)"
						/>
					</div>

					<p class="text-sm text-gray-500 mt-1">
						{{ widget.description }}
					</p>

					<div
						v-if="isWidgetEnabled(widget.id)"
						class="mt-4"
					>
						<div class="text-sm font-medium mb-2">Layout</div>
						<UButtonGroup>
							<UButton
								v-for="state in widget.config.availableStates"
								:key="state.title"
								size="sm"
								:variant="
									getWidgetState(widget.id) === state.title
										? 'solid'
										: 'outline'
								"
								@click="
									widgetsStore.changeWidgetState(
										widget.id,
										state.title,
									)
								"
							>
								{{ state.title }}
							</UButton>
						</UButtonGroup>
					</div>
				</div>
			</div>
		</UCard>
	</PageSection>
</template>
