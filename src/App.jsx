// Custom components
import HeaderMobile from './components/Header.Mobile';
import HeaderDesktop from './components/Header.Desktop';
import FooterMobile from './components/Footer.Mobile';
import PostAddMobile from './components/PostAdd.Mobile';
import PostaddDesktop from './components/PostAdd.Desktop';
import Newsfeed from './components/Newsfeed';
import NotificationsMobile from './components/Notifications.Mobile';
import NotificationsDesktop from './components/Notifications.Desktop';
import ProfileMenu from './components/Profile.Menu';
import SearchFilter from './components/SearchFilter';
// Hooks
import { useIsMobile } from './hooks/useIsMobile';
import { useState } from 'react';
import { useEffect } from 'react';
import PostList from './components/PostList';
import { apiBaseSearch } from './components/apibase';

const API_BASE = apiBaseSearch;

const App = ({ children }) => {

  // Calls the hook to determine if current screen is a mobile-screen or not
  const isMobile = useIsMobile();

  const [activePanel, setActivePanel] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const togglePanel = (panel) => {
    setActivePanel(prev => (prev === panel ? null : panel))
  };

  const closePanel = () => {
    setActivePanel(null)
  }

  console.log(activePanel)

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

  // Rendering logic for mobile-screens and desktop based on returned value from above hook
  if (isMobile)
    return (
      <>
        {activePanel !== 'add' && (
          <HeaderMobile
            onHomeClick={() => { console.log("Home clicked") }}
            onFilterClick={() => { console.log("Filter clicked") }}
            onProfileClick={() => togglePanel('profile')}
            onSearchResults={setPosts}
            onLoadingChange={setLoading}
          />
        )}

        {activePanel === 'filter' && <FilterPanel onClose={closePanel} />}
        {activePanel === 'profile' && <ProfileMenu onCloseProfileMenu={closePanel} />}
        {activePanel === 'add' && <PostAddMobile onClosePost={closePanel} />}

        {activePanel !== 'add' && (
          <FooterMobile
            onAddClick={() => togglePanel('add')}
            onNotificationClick={() => togglePanel('notification')}
          />
        )}

        {activePanel !== 'add' && activePanel !== 'profile' && (
          <PostList posts={posts} loading={loading} />
        )}

        <main className="pt-16">{children}</main>
      </>
    )
  return (
    <>
      <HeaderDesktop
        onHomeClick={() => { console.log("Home clicked") }}
        onFilterClick={() => { console.log("Filter clicked") }}
        onAddClick={() => togglePanel('add')}
        onNotificationClick={() => togglePanel('notification')}
        onProfileClick={() => togglePanel('profile')}
        onSearchResults={setPosts}
        onLoadingChange={setLoading}
      />

      {activePanel === 'filter' && <FilterPanel onCloseFilter={closePanel} />}
      {activePanel === 'add' && <PostaddDesktop onClosePost={closePanel} />}
      {activePanel === 'notification' && <NotificationsDesktop onCloseNotifications={closePanel} />}
      {activePanel === 'profile' && <ProfileMenu onCloseProfileMenu={closePanel} />}

      {activePanel !== 'profile' && (
        <PostList posts={posts} loading={loading} />
      )}

      <main className="pt-16">{children}</main>

    </>
  )
}

export default App;