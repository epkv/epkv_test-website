// Custom components
import HeaderMobile from './components/Header.Mobile';
import HeaderDesktop from './components/Header.Desktop';
import FooterMobile from './components/Footer.Mobile';
import PostAddMobile from './components/PostAdd.Mobile';
import PostaddDesktop from './components/PostAdd.Desktop';
import Newsfeed from './components/Newsfeed';
import NotificationsMobile from './components/Notifications.Mobile';
import NotificationsDesktop from './components/Notifications.Desktop';
import SearchMobile from './components/Search.Mobile';
import SearchDesktop from './components/Search.Desktop';
import ProfileMenu from './components/Profile.Menu';
// Hooks
import { useIsMobile } from './hooks/useIsMobile';
import { useState } from 'react';
import { useEffect } from 'react';

const App = ({ children }) => {

  // Calls the hook to determine if current screen is a mobile-screen or not
  const isMobile = useIsMobile();
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel(prev => (prev === panel ? null : panel))
  };

  const closePanel = () => {
    setActivePanel(null)
  }

  console.log(activePanel)


  // Rendering logic for mobile-screens and desktop based on returned value from above hook
  if (isMobile)
    return (
      <>
        {activePanel !== 'add' && (
          <HeaderMobile
            onHomeClick={() => { console.log("Home clicked") }}
            onSearchClick={() => togglePanel("search")}
            onFilterClick={() => { console.log("Filter clicked") }}
            onProfileClick={() => togglePanel('profile')}
          />
        )}

        {activePanel === 'search' && <SearchMobile onCloseSearch={closePanel} />}
        {activePanel === 'filter' && <FilterPanel onClose={closePanel} />}
        {activePanel === 'profile' && <ProfileMenu onCloseProfileMenu={closePanel} />}

        {activePanel !== 'add' && (
          <FooterMobile
            onAddClick={() => togglePanel('add')}
            onNotificationClick={() => togglePanel('notification')}
          />
        )}

        {activePanel === 'add' && <PostAddMobile onClosePost={closePanel} />}

        <main className="pt-16">{children}</main>
      </>
    )
  return (
    <>
      <HeaderDesktop
        onHomeClick={() => { console.log("Home clicked") }}
        onSearchClick={() => togglePanel("search")}
        onFilterClick={() => { console.log("Filter clicked") }}
        onAddClick={() => togglePanel('add')}
        onNotificationClick={() => togglePanel('notification')}
        onProfileClick={() => togglePanel('profile')}
      />

      {activePanel === 'search' && <SearchDesktop onCloseSearch={closePanel} />}
      {activePanel === 'filter' && <FilterPanel onCloseFilter={closePanel} />}
      {activePanel === 'add' && <PostaddDesktop onClosePost={closePanel} />}
      {activePanel === 'notification' && <NotificationsDesktop onCloseNotifications={closePanel} />}
      {activePanel === 'profile' && <ProfileMenu onCloseProfileMenu={closePanel} />}

      <main className="pt-16">{children}</main>

    </>
  )
}

export default App;