const { configure } = require('quasar/wrappers')

module.exports = configure(function (/* ctx */) {
	return {
		eslint: {
			warnings: true,
			errors: true
		},
		boot: [
			'axios',
		],
		css: [
			'app.scss'
		],
		extras: [
			'roboto-font',
			'material-icons',
		],
		build: {
			target: {
				browser: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
				node: 'node20'
			},

			vueRouterMode: 'hash',
			env: {
				GIPHY_API_KEY: process.env.GIPHY_API_KEY
			}
		},
		devServer: {
			open: true
		},
		framework: {
			config: {},
			plugins: []
		},
		animations: [],
		ssr: {
			pwa: false,
			prodPort: 3000,
			middlewares: [
				'render'
			]
		},
		pwa: {
			workboxMode: 'generateSW',
			injectPwaMetaTags: true,
			swFilename: 'sw.js',
			manifestFilename: 'manifest.json',
			useCredentialsForManifestTag: false,
		},
		capacitor: {
			hideSplashscreen: true
		},
		electron: {
			inspectPort: 5858,
			bundler: 'packager',
			builder: {
				appId: 'giphy-infinite'
			}
		},
		bex: {
			contentScripts: [
				'my-content-script'
			],
		}
	}
})
