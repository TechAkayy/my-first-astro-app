import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'

import { liveDesigner } from '@pinegrow/vite-plugin'
// import pkg from '@pinegrow/vite-plugin'
// const { liveDesigner } = pkg

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		liveDesigner({
			plugins: [],
			// routerHistoryMode: 'hash', // 'hash', 'html5' (default)
			customDependencies: {
				dependencies: {}
			},
			iconsets: ['all'],
			usingStandaloneVueDevtools: true
		})
	],
	resolve: {
		alias: {
			'~': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
