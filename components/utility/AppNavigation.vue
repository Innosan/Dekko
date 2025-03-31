<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
});

const { t } = useI18n();
const { user, signOut } = useAuth();

const pages = computed(() => [
	[
		{
			id: 1,
			to: '/hub',
			label: t('navigation.hub'),
			icon: 'i-heroicons-squares-2x2-solid',
		},
		{
			id: 2,
			to: '/profile',
			label: t('navigation.profile'),
			icon: 'i-heroicons-user-solid',
		},
		{
			id: 3,
			to: '/guide',
			label: t('navigation.guide'),
			icon: 'i-heroicons-book-open-solid',
		},
	],
	[
		{
			id: 4,
			to: '/settings',
			label: t('navigation.settings'),
			icon: 'i-heroicons-cog-6-tooth-solid',
		},
	],
]);

const misc = computed(() => [
	{
		id: 1,
		to: 'https://github.com/Innosan/Dekko',
		label: 'Contribute',
		icon: 'i-lucide-github',
	},
	{
		id: 2,
		to: 'https://docs.dekko.com/',
		label: 'Documentation',
		icon: 'i-lucide-file-code',
	},
]);
</script>

<template>
	<USlideover
		:title="title"
		:overlay="false"
		:description="$t('navigation.description', { name: user?.email })"
	>
		<UButton
			icon="i-heroicons-bars-3"
			color="primary"
			variant="subtle"
		/>

		<template #body>
			<div class="flex flex-col gap-6">
				<div class="flex flex-col gap-3">
					<UNavigationMenu
						orientation="vertical"
						:items="pages"
					/>

					<UButton
						@click="signOut"
						icon="i-heroicons-arrow-right-on-rectangle-solid"
						variant="ghost"
						color="error"
						class="hover:underline"
						>{{ $t('auth.logout') }}
					</UButton>
				</div>

				<USeparator :label="$t('labels.theming')" />

				<div class="grid grid-cols-2 gap-4">
					<LanguageSwitcher />

					<ColorSwitch />
				</div>

				<USeparator :label="$t('labels.misc')" />

				<UNavigationMenu
					orientation="vertical"
					:items="misc"
				/>
			</div>
		</template>
	</USlideover>
</template>
