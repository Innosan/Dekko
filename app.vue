<script setup lang="ts">
import * as locales from '@nuxt/ui/locale';

import { useSettingsStore } from '~/stores/settings';
import { useWidgetsStore } from '~/stores/widgets';

const { locale } = useI18n();
const appConfig = useAppConfig();
const { isAuthed } = useAuth();

const currentLayout = computed(() => (isAuthed.value ? 'authed' : 'unauthed'));

const settingsStore = useSettingsStore();
const widgetsStore = useWidgetsStore();

appConfig.ui.colors.primary = settingsStore.primaryColor;

const lang = computed(() => locales[locale.value].code);
const dir = computed(() => locales[locale.value].dir);

useHead({
	htmlAttrs: {
		lang,
		dir,
	},
});

onMounted(() => {
	widgetsStore.initialize();
});
</script>

<template>
	<UApp
		:toaster="{ position: 'bottom-right' }"
		:locale="locales[locale]"
	>
		<AppHeader />

		<NuxtLayout :name="currentLayout">
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
