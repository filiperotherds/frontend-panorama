'use client';

import * as React from 'react';
import Link from 'next/link';
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';

import { useIsMobile } from '@/hooks/use-mobile';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
	{
		title: 'Gerador de Orçamentos',
		href: '/docs/features/estimate',
		description:
			'Crie orçamentos personalizados de forma rápida e eficiente, facilitando a estimativa de custos para projetos e serviços.',
	},
	{
		title: 'Hover Card',
		href: '/docs/primitives/hover-card',
		description:
			'For sighted users to preview content available behind a link.',
	},
	{
		title: 'Progress',
		href: '/docs/primitives/progress',
		description:
			'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
	},
	{
		title: 'Scroll-area',
		href: '/docs/primitives/scroll-area',
		description: 'Visually or semantically separates content.',
	},
	{
		title: 'Tabs',
		href: '/docs/primitives/tabs',
		description:
			'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
	},
	{
		title: 'Tooltip',
		href: '/docs/primitives/tooltip',
		description:
			'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
	},
];

export function NavMenu() {
	const isMobile = useIsMobile();

	return (
		<NavigationMenu viewport={isMobile}>
			<NavigationMenuList className='flex-wrap'>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Soluções</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href='/docs'>Docs</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<Link href='/about'>Sobre Nós</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className='text-sm leading-none font-medium'>{title}</div>
					<p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
