// types/widgets/community/better/Better.ts
import type { Widget } from '~/types/widgets/Widget';
import { Wide, Narrow } from '~/types/widgets/WidgetState';

export interface Better extends Widget {
	defaultCoefficient: number;
}

// Factory function to create a default Better widget
export const createDefaultBetter = (): Better => ({
	id: 'better',
	title: 'Better',
	description: 'Sports betting calculator',
	icon: 'i-heroicons-calculator',
	category: 'community',
	defaultCoefficient: 250,
	version: '1.0.0',
	author: 'Dekko',
	config: {
		showTitle: true,
		state: Wide(),
		movable: true,
		availableStates: [Wide(), Narrow()],
	},
});
