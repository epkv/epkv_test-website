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
import { useIsMobile } from './hooks/useIsMobile';

const App = () => {

  // Calls the hook to determine if current screen is a mobile-screen or not
  const isMobile = useIsMobile();

  // Rendering logic for mobile-screens and desktop based on returned value from above hook
  if (isMobile)
    return (
      <>
        <HeaderMobile />
        <ProfileMenu />
        <FooterMobile />
      </>
    )
  return (
    <>
      <HeaderDesktop />
      <ProfileMenu />
    </>
  )
}

export default App;