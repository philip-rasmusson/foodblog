import Posts from '@/app/_components/Posts'
import { cachedClient } from '../../sanity/lib/client'
import { postsQuery } from '../../sanity/lib/queries'
// comment

export default async function Home() {
  const posts = await cachedClient(postsQuery)

  return <Posts posts={posts} />
}
