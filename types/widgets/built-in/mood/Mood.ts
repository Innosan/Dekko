import type { MoodReason } from '~/types/widgets/built-in/mood/MoodReason';

export type Mood = {
	value: number;
	icon: string;
	color: string;
	reason: MoodReason;
};
