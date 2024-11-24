import { prefetchGetPosts } from '@/__generated__/posts/posts'
import { PostList } from '@/features/posts/components/PostList'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { QueryClient } from '@tanstack/react-query'
import { cache } from 'react'

// cache() is scoped per request, so we don't leak data between requests
const getQueryClient = cache(() => new QueryClient())

export default async function Home() {
  const queryClient = getQueryClient()

  await prefetchGetPosts(queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostList />
    </HydrationBoundary>
  )
}
