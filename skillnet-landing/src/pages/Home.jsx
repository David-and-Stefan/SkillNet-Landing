import { Discover } from '../components/Discover';
import { Testimonials } from '../components/Testimonials';
import { BenefitsOfUsing } from '../components/BenefitsOfUsing';
import { useEffect } from 'react';
import { Simplify } from '../components/Simplify';
import { WeAreDifferent } from '../components/WeAreDifferent';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Simplify />
      <BenefitsOfUsing />
      <Discover />
      <WeAreDifferent />
      <Testimonials />
    </>
  )
}

export default Home