import { useState, useEffect } from 'react';
import { useEstimateModal } from '../context/EstimateModalContext';

export default function StickyMobileCTA() {
  const { openModal } = useEstimateModal();
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const contactEl = document.getElementById('contact');
    if (!contactEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setContactVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !contactVisible;

  useEffect(() => {
    if (visible) {
      document.body.style.paddingBottom = '68px';
    } else {
      document.body.style.paddingBottom = '0px';
    }
    return () => {
      document.body.style.paddingBottom = '0px';
    };
  }, [visible]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-limestone-light/95 backdrop-blur-md border-t border-border shadow-lg px-4 py-3">
        <button
          onClick={openModal}
          className="w-full bg-brass text-white py-3 rounded-xl font-semibold text-center hover:bg-brass-hover cursor-pointer transition-colors duration-200 focus:outline-2 focus:outline-brass focus:outline-offset-2"
        >
          Get a Free Estimate
        </button>
      </div>
    </div>
  );
}
