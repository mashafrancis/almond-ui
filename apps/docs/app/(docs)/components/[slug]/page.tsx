import { notFound } from 'next/navigation';

import * as React from 'react';

import { ComponentSlug } from '@/contentlayer.config';
import { config } from '@/lib/config';
import { ComponentLinks } from '@/ui/ComponentLinks';
import { Configurator } from '@/ui/Configurator';
import { Mdx } from '@/ui/Mdx';
import { Pager } from '@/ui/Pager';
import { Toc } from '@/ui/Toc';
import { getTableOfContents } from '@/utils/toc.util';
import { TrackView } from '@heimdall-logs/tracker/react';
import { Component, allComponents } from 'contentlayer/generated';

type ComponentProps = {
	params: {
		slug: string;
	};
};

export const generateStaticParams = async (): Promise<
	ComponentProps['params'][]
> => {
	return allComponents.map((page: Component) => ({
		slug: page.slug,
	}));
};

export const generateMetadata = ({ params }: ComponentProps) => {
	const component: Component | undefined = allComponents.find(
		(component: Component) => component.slug === params.slug
	);

	return {
		title: component?.title,
		description: component?.description,
		openGraph: {
			locale: 'en_US',
			url: `https://almond-ui.dev/components/${params.slug}`,
			title: component?.title,
			description: component?.description,
			siteName: config.metadata.title,
			images: [
				{
					url: config.metadata.ogImage,
					width: 1200,
					height: 630,
					alt: config.metadata.title,
				},
			],
		},
	};
};

const ComponentLayout = async ({ params }: ComponentProps) => {
	const component: Component | undefined = allComponents.find(
		(component: Component) => component.slug === params.slug
	);

	if (!component) {
		notFound();
	}

	const slug = component.slug as ComponentSlug;
	const toc = await getTableOfContents(component.body.raw);

	return (
		<TrackView
			name={slug}
			payload={{
				foo: 'bar',
			}}
		>
			<div className='flex space-x-10 p-4 2xl:px-10 2xl:py-8'>
				<article className='w-full 2xl:w-5/6'>
					<div className='mb-8 space-y-4'>
						<div className='flex items-center'>
							<h2 className='text-3xl font-extrabold text-gray-800 md:text-5xl'>
								{component.title}
							</h2>
							{component.polymorphic && (
								<div className='ml-3 rounded bg-gradient-to-r from-blue-500 to-green-900 px-2 py-1 text-xs text-white shadow shadow-fuchsia-200'>
									polymorphic
								</div>
							)}
						</div>
						<p className='text-lg leading-7 text-gray-600 md:text-xl'>
							{component.description}
						</p>
						<p className='text-gray-800'>{component.intro}</p>

						<ComponentLinks component={component} />
					</div>
					<Configurator component={slug} />
					<Mdx code={component.body.code} />
					<Pager current={component} />
				</article>

				<div className='hidden border-l border-l-gray-100 pl-4 2xl:block 2xl:w-1/6'>
					<Toc toc={toc} />
				</div>
			</div>
		</TrackView>
	);
};

export default ComponentLayout;
