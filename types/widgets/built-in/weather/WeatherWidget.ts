import type { Widget } from '~/types/widgets/Widget';
import type { WidgetConfig } from '~/types/widgets/WidgetConfig';

export interface WeatherWidget extends Widget {
	temperature: number;
	location: string;
	forecast: string[];
}

export interface WeatherWidgetConfig extends WidgetConfig {
	showTemperature: boolean;
	showForecast: boolean;
}
