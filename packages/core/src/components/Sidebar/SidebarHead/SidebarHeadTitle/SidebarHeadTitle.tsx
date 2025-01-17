'use client';

import { Ref, forwardRef, useMemo } from 'react';

import { useSidebarContext } from '@components/Sidebar/Sidebar.context';
import {
	SidebarHeadTitleComponent,
	SidebarHeadTitleProps,
} from '@components/Sidebar/SidebarHead/SidebarHeadTitle/SidebarHeadTitle.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { twMerge } from 'tailwind-merge';

const SidebarHeadTitle: SidebarHeadTitleComponent = forwardRef<
	HTMLDivElement,
	SidebarHeadTitleProps
>((props: SidebarHeadTitleProps, ref?: Ref<HTMLDivElement>) => {
	const theme = useComponentTheme('Sidebar');
	const { children, className, ...additionalProps } = props;
	const { state } = useSidebarContext();
	const classes = useMemo(() => {
		return twMerge(
			theme.headTitle({
				className,
			})
		);
	}, [className, theme]);
	const id = usePropId(props.id);

	return (
		<div id={id} ref={ref} className={classes} {...additionalProps}>
			{(state.expanded || state.hovered) && children}
		</div>
	);
});

SidebarHeadTitle.displayName = 'SidebarHeadTitle';

export { SidebarHeadTitle };
