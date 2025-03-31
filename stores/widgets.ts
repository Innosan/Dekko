// stores/widgets.ts
import type { Widget } from '~/types/widgets/Widget';
import { createDefaultBetter } from '~/types/widgets/community/better/Better';

export const useWidgetsStore = defineStore(
	'widgets',
	() => {
		// Store enabled widgets with their configurations
		const enabledWidgets = ref<Widget[]>([]);

		// Get widgets for a specific placement
		const getWidgetsByPlacement = (placement: string) => {
			return enabledWidgets.value.filter(
				(widget) => widget.config.state.placement === placement,
			);
		};

		// Enable a widget
		const enableWidget = (widget: Widget) => {
			if (!enabledWidgets.value.find((w) => w.id === widget.id)) {
				enabledWidgets.value.push(widget);
			}
		};

		// Disable a widget
		const disableWidget = (widgetId: string) => {
			const index = enabledWidgets.value.findIndex(
				(w) => w.id === widgetId,
			);
			if (index !== -1) {
				enabledWidgets.value.splice(index, 1);
			}
		};

		// Update widget state
		const changeWidgetState = (widgetId: string, stateName: string) => {
			const widget = enabledWidgets.value.find((w) => w.id === widgetId);

			if (widget) {
				const newState = widget.config.availableStates.find(
					(state) => state.title === stateName,
				);
				if (newState) {
					widget.config.state = newState;
				}
			}
		};

		// Initialize with default widgets
		const initialize = () => {
			if (enabledWidgets.value.length === 0) {
				enableWidget(createDefaultBetter());
			}
		};

		return {
			enabledWidgets,
			getWidgetsByPlacement,
			enableWidget,
			disableWidget,
			changeWidgetState,
			initialize,
		};
	},
	{
		persist: persistOptions.cookieDefault,
	},
);
