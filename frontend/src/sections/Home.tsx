import React from 'react';
import Hero from '../component/hero';
import BelowHero from '../component/belowHero';
import Services from './Services';
import BelowWarmWelcome from '../component/belowWarmWelcome';
import CustomerReviews from '../component/Reviews';
import Contacts from './Contact';
import Pricing from '../component/Pricing';

const Home: React.FC = () => (
  <div>
    <Hero />
    <BelowHero />
    <section id="services">
      <Services />
    </section>
    <BelowWarmWelcome />
    <section id="pricing">
      <Pricing />
    </section>
    <CustomerReviews />

    <section id="contacts">
      <Contacts />
    </section>
  </div>
);

export default Home;
