import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Business from './Business';
import Billings from './Billings';
import CardDeal from './CardDeal';
import CardTypes from './CardTypes';
import Testimonial from './Testimonial';
import Clients from './Clients';
import CTA from './CTA';
import OurBranches from './OurBranches';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Stats />
      <Business />
      <CardDeal />
      <CardTypes />
      <Billings />
      <OurBranches />
      <Testimonial />
      <Clients />
      <CTA />
    </div>
  );
};

export default Home;
