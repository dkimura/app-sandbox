import { defineConfig } from 'orval'

export default defineConfig({
  blog: {
    input: {
      target: './openapi.yaml',
    },
    output: {
      clean: true,
      client: 'react-query',
      mode: 'tags-split',
      target: '../../apps/nextjs/src/__generated__/blog.ts',
      schemas: '../../apps/nextjs/src/__generated__/model',
      mock: {
        type: 'msw',
        generateEachHttpStatus: true,
      },
      indexFiles: true,
    },
    hooks: {
      afterAllFilesWrite: 'biome format --write',
    },
  },
})
