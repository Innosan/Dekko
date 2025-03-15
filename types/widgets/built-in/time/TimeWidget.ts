import type { Widget } from '~/types/widgets/Widget';
import type { City } from '~/types/widgets/built-in/time/City';

export interface TimeWidget extends Widget {
	favoriteCity: City;
	allCities: City[];
}
