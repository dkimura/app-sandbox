'use client'

import { useGetPosts } from '@/__generated__/posts/posts'
import { Paper, Text } from '@mantine/core'

export const PostList = () => {
  const { data } = useGetPosts()

  return (
    <ul>
      {data?.items?.map(post => (
        <Paper key={post.id} withBorder radius="md">
          <Text size="xl" fw={500} mt="md">
            {post.title}
          </Text>
          <Text size="sm" mt="sm" c="dimmed">
            {post.content}
          </Text>
        </Paper>
      ))}
    </ul>
  )
}
