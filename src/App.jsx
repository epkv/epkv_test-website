import { useEffect, useState } from 'react';
import HeaderMobile from './components/HeaderMobile';
import HeaderDesktop from './components/HeaderDesktop';
import FooterMobile from './components/FooterMobile';
import PostAddMobile from './components/PostAddMobile';
import PostaddDesktop from './components/PostAddDesktop';
import Newsfeed from './components/Newsfeed';

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
        <HeaderMobile />
        <Newsfeed />
        <FooterMobile />
      </>
    )
  return (
    <>
      <HeaderDesktop />
      <Newsfeed />
    </>
  )
}

export default App;