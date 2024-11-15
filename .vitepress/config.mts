import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import config from './configs'

const sidebar = config.sidebar

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: 'en-US',
	title: 'coderjc',
	description: '一个收集前端面试题的站点',
	markdown: {
		lineNumbers: true,
		theme: {
			light: 'dracula', // 日间主题
			dark: 'github-dark' // 夜间主题
		},
		config(md) {
			md.use(containerPreview)
			md.use(componentPreview)
		}
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: {
			light: '/icon.1.svg',
			dark: '/icon.svg'
		},
		// lastUpdated: '最后更新时间',
		outline: {
			label: '页面导航',
			level: 'deep'
		},
		footer: {
			message: '了解真相才能获得真正的自由',
			copyright: 'coderjc 版权所有 @2024-2050'
		},
		nav: [
			{ text: '指南', link: '/guide/foreword', activeMatch: '/guide' },
			{ text: '正文', link: '/document/index/index', activeMatch: '/document' }
		],

		sidebar,

		socialLinks: [{ icon: 'github', link: 'https://github.com/jieci0825' }],

		search: {
			provider: 'local',
			options: {
				_render(src, env, md) {
					const html = md.render(src, env)
					if (env.frontmatter?.title) return md.render(`# ${env.frontmatter.title}`) + html
					return html
				}
			}
		}
	}
})
