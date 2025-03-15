import {
	defaultTeam,
	deepCloneTeam,
} from '~/types/widgets/community/better/Team';
import { useStorage } from '@vueuse/core';
import { skipHydrate } from 'pinia';

export const useBetterWidgetStore = defineStore('better-widget', () => {
	const bankValue = useStorage('bank-value', 1000);

	const teamStates = reactive({
		teamA: deepCloneTeam(defaultTeam),
		teamB: deepCloneTeam(defaultTeam),
	});

	const calculateImpliedProbabilities = () => {
		const { teamA, teamB } = teamStates;

		teamA.impliedProbability.value = (1 / (teamA.coefficient / 100)) * 100;
		teamB.impliedProbability.value = (1 / (teamB.coefficient / 100)) * 100;
	};

	const calculateKellyCriterions = () => {
		const { teamA, teamB } = teamStates;

		teamA.kellyCriterion.value =
			(((teamA.userWinProbability / 100) * (teamA.coefficient / 100) -
				1) /
				(teamA.coefficient / 100 - 1)) *
			100;
		teamB.kellyCriterion.value =
			(((teamB.userWinProbability / 100) * (teamB.coefficient / 100) -
				1) /
				(teamB.coefficient / 100 - 1)) *
			100;
	};

	const calculateExpectedProfits = () => {
		const { teamA, teamB } = teamStates;

		teamA.expectedProfit.value =
			bankValue.value *
			(teamA.kellyCriterion.value / 100) *
			(teamA.coefficient / 100);
		teamB.expectedProfit.value =
			bankValue.value *
			(teamB.kellyCriterion.value / 100) *
			(teamB.coefficient / 100);

		teamA.suggestedBet.value =
			bankValue.value * (teamA.kellyCriterion.value / 100);
		teamB.suggestedBet.value =
			bankValue.value * (teamB.kellyCriterion.value / 100);
	};

	const calculateExpectedValues = () => {
		const { teamA, teamB } = teamStates;

		teamA.expectedValue.value =
			((teamA.userWinProbability / 100) * (teamA.coefficient / 100) - 1) *
			100;
		teamB.expectedValue.value =
			((teamB.userWinProbability / 100) * (teamB.coefficient / 100) - 1) *
			100;
	};

	const increaseBankValue = (value: number) => {
		bankValue.value += value;
	};

	const calculateWinProbability = () => {
		const { teamA, teamB } = teamStates;

		teamB.userWinProbability = 100 - teamA.userWinProbability;
	};

	watch(
		() => [teamStates.teamA.coefficient, teamStates.teamB.coefficient],
		() => {
			calculateImpliedProbabilities();
			calculateKellyCriterions();
			calculateExpectedProfits();
			calculateExpectedValues();
		},
		{ deep: true },
	);

	watch(
		() => [teamStates.teamA.userWinProbability],
		() => {
			calculateWinProbability();

			calculateKellyCriterions();
			calculateExpectedProfits();
			calculateImpliedProbabilities();
			calculateExpectedValues();
		},
	);

	return {
		bankValue: skipHydrate(bankValue),
		teamStates,

		calculateImpliedProbabilities,
		calculateKellyCriterions,
		calculateExpectedProfits,
		calculateExpectedValues,
		calculateWinProbability,

		increaseBankValue,
	};
});
