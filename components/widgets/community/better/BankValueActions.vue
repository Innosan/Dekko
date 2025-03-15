<script setup lang="ts">
import { useBetterWidgetStore } from '~/stores/better-widget';

const betterWidgetStore = useBetterWidgetStore();

const bankValueActions = [
	{
		label: '100 ₽',
		color: 'error',
		action: () => betterWidgetStore.increaseBankValue(-100),
	},
	{
		label: '50 ₽',
		color: 'error',
		action: () => betterWidgetStore.increaseBankValue(-50),
	},
	{
		label: '50 ₽',
		color: 'primary',
		action: () => betterWidgetStore.increaseBankValue(50),
	},
	{
		label: '100 ₽',
		color: 'primary',
		action: () => betterWidgetStore.increaseBankValue(100),
	},
	{
		label: '500 ₽',
		color: 'primary',
		action: () => betterWidgetStore.increaseBankValue(500),
	},
];

const isCustomBankValue = ref(false);
const customBankValue = ref(100);
</script>

<template>
	<div class="flex gap-2">
		<template
			v-for="action in bankValueActions"
			:key="action.label"
		>
			<UButton
				@click="action.action"
				variant="subtle"
				:color="action.color"
				:label="action.label"
			/>
		</template>

		<UButton
			@click="isCustomBankValue = !isCustomBankValue"
			label="Custom"
			icon="i-heroicons-pencil"
			v-if="!isCustomBankValue"
		/>
		<div
			v-else
			class="flex gap-2 items-center"
		>
			<UInputNumber
				v-model="customBankValue"
				placeholder="Add custom value"
			/>

			<UButtonGroup>
				<UButton
					color="neutral"
					variant="outline"
					icon="i-heroicons-x-mark-solid"
					aria-label="Cancel custom value"
					@click="isCustomBankValue = false"
				/>
				<UButton
					color="neutral"
					variant="outline"
					icon="i-heroicons-check-solid"
					aria-label="Apply custom value"
					:disabled="customBankValue === 0"
					@click="
						() => {
							isCustomBankValue = false;
							betterWidgetStore.increaseBankValue(
								customBankValue,
							);
						}
					"
				/>
			</UButtonGroup>
		</div>
	</div>
</template>
