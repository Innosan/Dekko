<script setup lang="ts">
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
		<Better />
	</PageSection>
</template>
