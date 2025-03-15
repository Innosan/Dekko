<script setup lang="ts">
import { z } from 'zod';

const { t } = useI18n();
const { signIn, signUp } = useAuth();

const schema = z.object({
	email: z
		.string({ message: t('validation.required') })
		.email(t('validation.email')),
	password: z
		.string({ message: t('validation.required') })
		.min(12, t('validation.password')),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
	email: undefined,
	password: undefined,
});

const toast = useToast();

const tabs = computed(() => [
	{
		label: t('auth.sign.label'),
		description: t('auth.sign.description'),
		icon: 'i-heroicons-user-20-solid',
		slot: 'sign-in',
	},
	{
		label: t('auth.new.label'),
		description: t('auth.new.description'),
		icon: 'i-heroicons-user-plus-solid',
		slot: 'create-new',
	},
]);
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="space-y-4 w-1/2 m-auto"
	>
		<UTabs
			:items="tabs"
			variant="link"
			class="gap-4 w-full"
			:ui="{ trigger: 'flex-1' }"
		>
			<template #sign-in="{ item }">
				<p class="text-[var(--ui-text-muted)] mb-4">
					{{ item.description }}
				</p>

				<UFormField
					label="Email"
					name="email"
				>
					<UInput v-model="state.email" />
				</UFormField>

				<UFormField
					label="Password"
					name="password"
				>
					<UInput
						v-model="state.password"
						type="password"
					/>
				</UFormField>

				<UButton
					type="submit"
					@click="signIn(state.email!, state.password!)"
					label="Continue"
					block
				/>
			</template>

			<template #create-new="{ item }">
				<p class="text-[var(--ui-text-muted)] mb-4">
					{{ item.description }}
				</p>

				<UFormField
					label="Email"
					name="email"
				>
					<UInput v-model="state.email" />
				</UFormField>

				<UFormField
					label="Password"
					name="password"
				>
					<UInput
						v-model="state.password"
						type="password"
					/>
				</UFormField>

				<UButton
					type="submit"
					@click="signUp(state.email!, state.password!)"
					label="Continue"
					block
				/>
			</template>
		</UTabs>
	</UForm>
</template>
