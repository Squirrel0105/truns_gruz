'use client'
import MainBlock from "./components/MainBlock";
import Our from "./components/Our";
import Services from "./components/Services";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from "./components/Header";


export default function Home() {

  const searchParams = useSearchParams();

  useEffect(() => {
    const scroll = searchParams.get('scroll');
    if (scroll) {
      const el = document.getElementById(scroll);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return (
    <div >
      <Header/>
      <MainBlock/>
      <Our/>
      <Services/>
      <Form/>
      <Footer/>
    </div>
  );
}
