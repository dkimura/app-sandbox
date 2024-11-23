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
      override: {
        mutator: {
          path: '../../apps/nextjs/src/libs/axios.ts',
          name: 'customInstance',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'biome format --write',
    },
  },
})
