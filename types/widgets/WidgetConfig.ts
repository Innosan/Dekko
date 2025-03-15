import type { WidgetState } from '~/types/widgets/WidgetState';

export interface WidgetConfig {
	showTitle: boolean;
	state: WidgetState;
	movable: boolean;

	availableStates: WidgetState[];
}
