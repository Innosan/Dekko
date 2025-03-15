<script setup lang="ts">
import type { SanityGrade } from '~/types/widgets/community/better/SanityGrade';

const props = defineProps({
	value: {
		type: Number,
		required: true,
	},
	fraction: {
		type: Number,
		default: 2,
	},
	sign: {
		type: String,
		default: '',
	},
	// sanityGrades: {
	// 	type: Array as PropType<SanityGrade[]>,
	// 	required: true,
	// },
});

const { $gsap } = useNuxtApp();

const computedValue = computed(() => {
	return props.value;
});
const tweenedValue = reactive({ number: computedValue.value });

// const currentGrade = computed(() => {
// 	return props.sanityGrades.find(grade => props.value <= grade.grade) || props.sanityGrades[props.sanityGrades.length - 1];
// });

watch(computedValue, (value) => {
	$gsap.to(tweenedValue, { number: value, duration: 1 });
});

// watch(currentGrade, (grade) => {
// 	$gsap.to('.animated-number', { color: grade.color, duration: 1 });
// });
</script>

<template>
	<span class="animated-number"
		>{{ tweenedValue.number.toFixed(fraction) }} {{ sign }}</span
	>
</template>
