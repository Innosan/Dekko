import type { Widget } from '~/types/widgets/Widget';
import type { Mood } from '~/types/widgets/built-in/mood/Mood';

export interface MoodWidget extends Widget {
	currentMood: Mood;
	timestamp: string;
}
