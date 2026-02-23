import { collection, config, fields } from '@keystatic/core';

export default config({
	storage: {
		kind: 'github',
		repo: {
			owner: 'swamikumar93',
			name: 'swamikumar-blog',
		},
	},

	collections: {
		blog: collection({
			label: 'Blog Posts',
			slugField: 'title',
			path: 'src/content/blog/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				description: fields.text({ label: 'Description', multiline: true }),
				pubDate: fields.date({
					label: 'Published Date',
					defaultValue: { kind: 'today' },
				}),
				updatedDate: fields.date({ label: 'Updated Date' }),
				heroImage: fields.image({
					label: 'Hero Image',
					directory: 'src/assets',
					publicPath: '../../assets/',
				}),
				content: fields.mdx({ label: 'Content' }),
			},
		}),
	},
});
