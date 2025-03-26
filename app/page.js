'use client'
import MainBlock from "./components/MainBlock";
import Our from "./components/Our";
import Services from "./components/Services";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';


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
