import type { WidgetConfig } from '~/types/widgets/WidgetConfig';

export interface Widget {
	title: string;
	description: string;

	config: WidgetConfig;
}
