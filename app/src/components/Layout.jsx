import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyMobileCTA from './StickyMobileCTA';
import { EstimateModalProvider } from '../context/EstimateModalContext';
import EstimateModal from './EstimateModal';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <EstimateModalProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
      <EstimateModal />
    </EstimateModalProvider>
  );
}
