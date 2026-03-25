import Services from "@/app/_sections/Services";
import Main from "@/app/_sections/Main";
import Container from "@/components/Container";
import About from "@/app/_sections/About";
import Indicators from "@/app/_sections/Indicators";
import Office from "@/app/_sections/Office";
import Contacts from "@/app/_sections/Contacts";
import Footer from "@/app/_sections/Footer";


export default function Home() {
  return (
    <div>
        <Main />
        <Container>
            <Services />
            <About />
            <Indicators />
            <Office />
            <Contacts />
        </Container>
        <Footer />
    </div>
  );
}
