import Header from "./components/Header";
import MainBlock from "./components/MainBlock";
import Our from "./components/Our";
import Services from "./components/Services";
import Form from "./components/Form";
import Footer from "./components/Footer";

export default function Home() {
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
