// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import astroMermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		astroMermaid(),
		starlight({
			title: 'Air Framework',

			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AndreyDAraya/air-framework' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'index' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Architecture', slug: 'core/architecture' },
						{ label: 'Modules', slug: 'core/modules' },
					],
				},
				{
					label: 'Dependency Injection',
					items: [
						{ label: 'AirDI & Annotations', slug: 'core/dependency-injection' },
					],
				},
				{
					label: 'State Management',
					items: [
						{ label: 'Air State', slug: 'state/air-state' },
						{ label: 'Code Generation', slug: 'state/generate-state' },
						{ label: 'Flows & Pulses', slug: 'state/flows-and-pulses' },
						{ label: 'AirView', slug: 'state/air-view' },
					],
				},
				{
					label: 'Communication',
					items: [
						{ label: 'Event Bus', slug: 'communication/event-bus' },
					],
				},
				{
					label: 'Security',
					items: [
						{ label: 'Permissions & Security', slug: 'security/permissions' },
					],
				},
				{
					label: 'Routing',
					items: [
						{ label: 'Routing Guide', slug: 'routing/air-router' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'CLI Reference', slug: 'cli/overview' },
						{ label: 'Best Practices', slug: 'guides/best-practices' },
						{ label: 'Packages Overview', slug: 'packages/overview' },
					],
				},
			],
		}),
	],
});
