import { useEffect, useState } from 'react';
import HeaderMobile from './components/HeaderMobile';
import HeaderDesktop from './components/HeaderDesktop';
import PostList from './components/PostList';

const API_BASE = "http://localhost:3002/search"

const App = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize()

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadInitialPosts = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${API_BASE}/all`)
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadInitialPosts()
  }, []);

  if (isMobile)
    return (
      <>
        <HeaderMobile />
        <PostList posts={posts} loading={loading} />
      </>
    )
  return (
    <>
      <HeaderDesktop onSearchResults={setPosts} onLoadingChange={setLoading} />
      <PostList posts={posts} loading={loading} />
    </>
  )
}

export default App;