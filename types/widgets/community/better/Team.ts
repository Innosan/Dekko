import type { TeamStat } from '~/types/widgets/community/better/TeamStat';

export type Team = {
	coefficient: number;
	userWinProbability: number;

	impliedProbability: TeamStat;
	kellyCriterion: TeamStat;
	suggestedBet: TeamStat;
	expectedProfit: TeamStat;
	expectedValue: TeamStat;
};

export const defaultTeam: Team = {
	coefficient: 250,
	userWinProbability: 50,
	impliedProbability: {
		title: 'Implied Probability',
		value: 50,
		sign: '%',
		fraction: 2,
		icon: 'percent',
		description:
			'The probability of the event happening according to the bookmaker.',
	},
	kellyCriterion: {
		title: 'Kelly Criterion',
		value: 1,
		sign: '%',
		fraction: 2,
		icon: 'percent',
		description: 'The percentage of the bankroll to bet.',
	},
	suggestedBet: {
		title: 'Suggested Bet',
		value: 100,
		sign: '$',
		fraction: 2,
		icon: 'dollar-sign',
		description: 'The amount of money to bet.',
	},
	expectedProfit: {
		title: 'Expected Profit',
		value: 100,
		sign: '$',
		fraction: 2,
		icon: 'dollar-sign',
		description: 'The amount of money to win.',
	},
	expectedValue: {
		title: 'Expected Value',
		value: 1,
		sign: '%',
		fraction: 2,
		icon: 'percent',
		description: 'The value of the bet in the long run.',
	},
};

export const deepCloneTeam = (team: Team) => {
	return {
		...team,
		impliedProbability: { ...team.impliedProbability },
		kellyCriterion: { ...team.kellyCriterion },
		suggestedBet: { ...team.suggestedBet },
		expectedProfit: { ...team.expectedProfit },
		expectedValue: { ...team.expectedValue },
	};
};
