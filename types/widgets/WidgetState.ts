export interface WidgetState {
	title: string;
	placement: string;
}

export const Sidebar = (): WidgetState => ({
	title: 'Sidebar',
	placement: 'sidebar',
});

export const Dekko = (): WidgetState => ({
	title: 'Dekko',
	placement: 'dekko',
});

export const Wide = (): WidgetState => ({
	title: 'Wide',
	placement: 'wide',
});

export const Narrow = (): WidgetState => ({
	title: 'Narrow',
	placement: 'narrow',
});
