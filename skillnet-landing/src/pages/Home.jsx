import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BenefitsOfUsing } from '../components/BenefitsOfUsing';
import { Discover } from '../components/Discover';
import { Simplify } from '../components/Simplify';
import { Testimonials } from '../components/Testimonials';
import { WeAreDifferent } from '../components/WeAreDifferent';
import i18n from '../i18n';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <I18nextProvider i18n={i18n}>
      <Simplify />
      <BenefitsOfUsing />
      <Discover />
      <WeAreDifferent />
      <Testimonials />
    </I18nextProvider>
  );
}

export default Home;
