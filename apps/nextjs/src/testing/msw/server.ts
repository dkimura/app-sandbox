import { getGetPostsMockHandler } from '@/__generated__/posts/posts.msw'
import { setupServer } from 'msw/node'

export const server = setupServer(
  getGetPostsMockHandler({
    items: Array.from({ length: 25 }, (_, i) => ({
      id: i.toString(),
      authorId: i.toString(),
      title: `Post ${i}`,
      content: `Content ${i}`,
      status: 'published',
    })),
  }),
)
