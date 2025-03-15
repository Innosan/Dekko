import { persistOptions } from '~/utils/persistence';

export const useSettingsStore = defineStore(
	'dekko-settings-store',
	() => {
		const primaryColor = ref('emerald');
		const grayColor = ref('zinc');

		const setPrimaryColor = (color: string) => {
			primaryColor.value = color;
		};

		const setGrayColor = (color: string) => {
			grayColor.value = color;
		};

		return {
			primaryColor,
			grayColor,
			setPrimaryColor,
			setGrayColor,
		};
	},
	{
		persist: persistOptions.cookieDefault,
	},
);
