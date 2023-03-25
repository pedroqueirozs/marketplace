import "./App.css";
import "./config/database";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Product from "./Componets/Product";
import { Grid } from "@mui/material";
import Container from "./Componets/container";
import Header from "./Componets/Header/Header";
import Products from "./Componets/Product";
import Section from "./Componets/sections/section";
import Footer from "./Componets/Footer/index";
import Button from "./Componets/Buttons/Button";
function App() {
  async function handleLogin() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const user = await signInWithPopup(auth, provider);
    console.log(user);
  }

  return (
    <>
      <Container>
        <Header></Header>
        <Section title={"Lançamentos"}>
          <Products />
        </Section>
        <Section title={"Em oferta"}>
          <Products />
        </Section>
        <Button></Button>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
