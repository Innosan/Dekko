<script setup lang="ts">
import { useBetterWidgetStore } from '~/stores/better-widget';

const store = useBetterWidgetStore();
</script>

<template>
	<UCard>
		<div class="flex justify-between items-center">
			<h2 class="text-3xl font-black">
				<AnimatedNumber
					:value="store.bankValue"
					:fraction="0"
					sign="₽"
				/>
			</h2>
			<BankValueActions compact />
		</div>
	</UCard>
</template>
