import DefaultTheme from 'vitepress/theme'

import '@vitepress-demo-preview/component/dist/style.css'
import './custom.css'

import reigsterApp from './register-app'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		reigsterApp(app)
	}
}
