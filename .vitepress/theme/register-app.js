import { ElementPlusContainer } from '@vitepress-demo-preview/component'

const components = []

export default function (app) {
	components.forEach(comp => app.component(comp.name, comp))
	app.component('demo-preview', ElementPlusContainer)
}
