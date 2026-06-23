import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiBaseUrl = env.VITE_API_BASE_URL || 'https://hackaton-20261-front-587720740455.us-east1.run.app/api/v1'
  const apiTarget = apiBaseUrl.replace(/\/api\/v1\/?$/, '')

  return defineConfig({
    plugins: [
      tailwindcss(),
      react(),
    ],
    server: {
      port: 5174,
      proxy: {
        '/api': {
          target: apiTarget,
          changeOrigin: true,
        },
      },
    },
  })
}
