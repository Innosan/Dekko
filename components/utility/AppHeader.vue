<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
	<header class="flex justify-between items-center gap-4">
		<h1 class="font-black text-3xl text-nowrap text-primary-400">
			{{ appConfig.appName }}
		</h1>

		<div class="flex gap-1 items-center">
			<AppNavigation :title="appConfig.appName as string" />
		</div>
	</header>
</template>
