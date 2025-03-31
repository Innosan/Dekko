import type { WidgetConfig } from '~/types/widgets/WidgetConfig';

export interface Widget {
	id: string;
	title: string;
	description: string;
	icon: string;
	category: string;

	config: WidgetConfig;

	version: string;
	author: string;
}
