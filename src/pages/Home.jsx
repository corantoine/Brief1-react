import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Pricings from '../components/Pricings';
import Footer from '../components/Footer';

export default function Home() {
  return (<>
    <Header />
    <main>
      <Features />
      <Pricings />
    </main>
    <Footer />
  </>);
}
