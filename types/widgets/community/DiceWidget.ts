import type { Widget } from '~/types/widgets/Widget';

export interface DiceWidget extends Widget {
	sides: number;
	rolls: number;
	results: number[];
}
