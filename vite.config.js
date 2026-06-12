import { defineConfig, transformWithOxc } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { readFileSync } from 'fs'
import { dsvFormat } from 'd3-dsv'
import convertCSS from './bundler/convertCSS.js'

function jsAsJsxPlugin() {
  return {
    name: 'vite-plugin-js-as-jsx',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.js$/) || id.includes('node_modules')) return null
      return transformWithOxc(code, id, { lang: 'jsx' })
    },
  }
}

function dsvPlugin() {
  return {
    name: 'vite-plugin-dsv',
    enforce: 'pre',
    load(id) {
      if (id.endsWith('.csv')) {
        const code = readFileSync(id, 'utf-8')
        const parsed = dsvFormat(',').parse(code)
        return `export default ${JSON.stringify(parsed)}`
      }
      if (id.endsWith('.tsv')) {
        const code = readFileSync(id, 'utf-8')
        const parsed = dsvFormat('\t').parse(code)
        return `export default ${JSON.stringify(parsed)}`
      }
    },
  }
}

function rawCssPlugin() {
  return {
    name: 'vite-plugin-raw-css',
    enforce: 'pre',
    configResolved(config) {
      for (const pluginName of ['vite:css', 'vite:css-post']) {
        const plugin = config.plugins.find(p => p.name === pluginName)
        if (!plugin?.transform) continue
        const origTransform = plugin.transform
        if (typeof origTransform === 'function') {
          plugin.transform = function(code, id, ...args) {
            if (id.endsWith('.raw.css')) return null
            return origTransform.call(this, code, id, ...args)
          }
        } else if (origTransform.handler) {
          const origHandler = origTransform.handler
          origTransform.handler = function(code, id, ...args) {
            if (id.endsWith('.raw.css')) return null
            return origHandler.call(this, code, id, ...args)
          }
        }
      }
    },
    load(id) {
      if (!id.endsWith('.raw.css')) return null
      const code = readFileSync(id, 'utf-8')
      const converted = convertCSS(code)
      return `export default ${JSON.stringify(converted)}`
    },
  }
}

export default defineConfig({
  root: 'example',
  plugins: [jsAsJsxPlugin(), dsvPlugin(), rawCssPlugin(), react()],
  resolve: {
    alias: {
      rawcharts: path.resolve('src'),
    },
  },
  server: {
    port: 9000,
  },
  build: {
    rolldownOptions: {
      moduleTypes: {
        '.raw.css': 'js',
        '.csv': 'js',
        '.tsv': 'js',
      },
    },
  },
})



