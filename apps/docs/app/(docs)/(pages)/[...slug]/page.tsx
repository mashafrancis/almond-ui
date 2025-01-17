import { notFound } from 'next/navigation';

import * as React from 'react';

import { config } from '@/lib/config';
import { Mdx } from '@/ui/Mdx';
import { Pager } from '@/ui/Pager';
import { Toc } from '@/ui/Toc';
import { getTableOfContents } from '@/utils/toc.util';
import { TrackView } from '@heimdall-logs/tracker/react';
import { Page, allPages } from 'contentlayer/generated';

type PageProps = {
	params: {
		slug: string[];
	};
};

export const generateStaticParams = async (): Promise<
	PageProps['params'][]
> => {
	return allPages.map((page: Page) => ({
		slug: page.slug.split('/'),
	}));
};

export const generateMetadata = ({ params }: PageProps) => {
	const slug = params.slug?.join('/') || '';
	const page: Page | undefined = allPages.find(
		(page: Page) => page._raw.flattenedPath === slug
	);

	return {
		title: page?.title,
		description: page?.description,
		openGraph: {
			locale: 'en_US',
			url: `https://almond-ui.francismasha.com/${params.slug}`,
			title: page?.title,
			description: page?.description,
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

const PageLayout = async ({ params }: PageProps) => {
	const slug = params.slug?.join('/') || '';
	const page: Page | undefined = allPages.find(
		(page) => page._raw.flattenedPath === slug
	);

	if (!page) {
		notFound();
	}

	const toc = await getTableOfContents(page.body.raw);

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
						<h2 className='text-3xl font-extrabold text-gray-800 md:text-5xl'>
							{page.title}
						</h2>
						<p className='text-lg leading-7 text-gray-600 md:text-xl'>
							{page.description}
						</p>
					</div>
					<Mdx code={page.body.code} />
					<Pager current={page} />
				</article>

				<div className='hidden border-l border-l-gray-100 pl-4 2xl:block 2xl:w-1/6'>
					<Toc toc={toc} />
				</div>
			</div>
		</TrackView>
	);
};

export default PageLayout;
