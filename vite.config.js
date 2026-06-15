import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = 'JHJH1289'
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  root: 'src',
  base: isGitHubActions ? `/${repositoryName}/` : '/',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
})
