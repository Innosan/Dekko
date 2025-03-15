import type { Link } from '~/types/widgets/built-in/linker/Link';
import type { Widget } from '~/types/widgets/Widget';

export interface LinkerWidget extends Widget {
	links: Link[];
}
