<script setup lang="ts">
import WidgetContainer from '~/components/widgets/WidgetContainer.vue';

definePageMeta({
	title: 'Home',
	heading: 'Home',
	description: 'Home page',
	layout: 'authed',
});
</script>

<template>
	<PageSection
		:title="$t('headings.main')"
		icon="i-heroicons-home-solid"
		:is-divided="false"
	>
		<WidgetContainer />
	</PageSection>
</template>
