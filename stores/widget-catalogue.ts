// stores/widget-catalog.ts
import type { Widget } from '~/types/widgets/Widget';
import { createDefaultBetter } from '~/types/widgets/community/better/Better';
// Import other widget factories as needed

export const useWidgetCatalogStore = defineStore('widget-catalog', () => {
	// Registry of all available widgets with default configurations
	const availableWidgets = ref<Widget[]>([
		createDefaultBetter(),
		// Add other widgets here
	]);

	return {
		availableWidgets,
	};
});
