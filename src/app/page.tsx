import Services from "@/app/_sections/Services";
import Main from "@/app/_sections/Main";
import Container from "@/components/Container";
import About from "@/app/_sections/About";


export default function Home() {
  return (
    <div>
        <Main />
        <Container>
            <Services />
            <About />
        </Container>
    </div>
  );
}
