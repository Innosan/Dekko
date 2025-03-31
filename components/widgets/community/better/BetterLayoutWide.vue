<script setup lang="ts">
import { useBetterWidgetStore } from '~/stores/better-widget';

const store = useBetterWidgetStore();
</script>

<template>
	<UCard>
		<template #header>
			<div class="flex flex-col gap-2">
				<h2 class="text-4xl font-black">
					<AnimatedNumber
						:value="store.bankValue"
						:fraction="0"
						sign="₽"
					/>
				</h2>
				<BankValueActions />
			</div>
		</template>
		<template #default>
			<div class="flex flex-col gap-6">
				<TitledBlock
					:title="`Chances distribution • ${store.teamStates.teamA.userWinProbability}% / ${store.teamStates.teamB.userWinProbability}%`"
					spacing="gap-3"
				>
					<USlider
						v-model="store.teamStates.teamA.userWinProbability"
						:min="0"
						:max="100"
						:ui="{ track: 'bg-red-400/80' }"
					/>
				</TitledBlock>

				<USeparator
					orientation="horizontal"
					label="Odds"
				/>

				<div class="grid grid-cols-2 gap-8">
					<TitledBlock
						:title="`Team A odds • ${
							store.teamStates.teamA.coefficient / 100
						}`"
						spacing="gap-3"
					>
						<USlider
							v-model="store.teamStates.teamA.coefficient"
							:min="100"
							:max="500"
						/>
						<div class="grid grid-cols-4 gap-2">
							<UButton
								icon="i-heroicons-minus"
								label="1"
								variant="outline"
								@click="store.teamStates.teamA.coefficient -= 1"
							/>
							<UButton
								icon="i-heroicons-minus"
								label="10"
								variant="subtle"
								@click="
									store.teamStates.teamA.coefficient -= 10
								"
							/>
							<UButton
								icon="i-heroicons-plus"
								label="10"
								variant="subtle"
								@click="
									store.teamStates.teamA.coefficient += 10
								"
							/>
							<UButton
								icon="i-heroicons-plus"
								label="1"
								variant="outline"
								@click="store.teamStates.teamA.coefficient += 1"
							/>
						</div>
					</TitledBlock>

					<TitledBlock
						:title="`Team B odds • ${
							store.teamStates.teamB.coefficient / 100
						}`"
						spacing="gap-3"
					>
						<USlider
							v-model="store.teamStates.teamB.coefficient"
							:min="100"
							:max="500"
						/>
						<div class="grid grid-cols-4 gap-2">
							<UButton
								icon="i-heroicons-minus"
								label="1"
								variant="outline"
								@click="store.teamStates.teamB.coefficient -= 1"
							/>
							<UButton
								icon="i-heroicons-minus"
								label="10"
								variant="subtle"
								@click="
									store.teamStates.teamB.coefficient -= 10
								"
							/>
							<UButton
								icon="i-heroicons-plus"
								label="10"
								variant="subtle"
								@click="
									store.teamStates.teamB.coefficient += 10
								"
							/>
							<UButton
								icon="i-heroicons-plus"
								label="1"
								variant="outline"
								@click="store.teamStates.teamB.coefficient += 1"
							/>
						</div>
					</TitledBlock>
				</div>

				<USeparator
					orientation="horizontal"
					label="Stats"
				/>

				<div class="grid grid-cols-5 items-center">
					<TeamStats :team="store.teamStates.teamA" />
					<p class="text-6xl font-black text-center">VS</p>
					<TeamStats :team="store.teamStates.teamB" />
				</div>
			</div>
		</template>
	</UCard>
</template>
