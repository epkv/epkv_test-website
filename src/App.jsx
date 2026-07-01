import { useEffect, useState } from 'react';
import HeaderMobile from './components/Header.Mobile';
import HeaderDesktop from './components/Header.Desktop';
import FooterMobile from './components/Footer.Mobile';
import PostAddMobile from './components/PostAdd.Mobile';
import PostaddDesktop from './components/PostAdd.Desktop';
import Newsfeed from './components/Newsfeed';
import SearchResults from './components/Notifications.Mobile';

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize()

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile)
    return (
      <>
        <SearchResults />
      </>
    )
  return (
    <>
      <HeaderDesktop />
    </>
  )
}

export default App;