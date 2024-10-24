import Head from "next/head";
import { AliadosPlazitPolygal } from "../components";
import AliadosPlaskolite from "../components/Aliados";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import ProductsList from "../components/Solucions";

export async function getServerSideProps() {
  try {
    //const res = await fetch('http://localhost:8000/api/productsList/')
    const serverUrl = process.env.SERVER_URL;
    const res = await fetch(serverUrl + "/api/productsList/");
    const data = await res.json();
    return { props: { data } };
  } catch (err) {
    console.log(err);
    return { props: { data: [] } };
  }
}

function Home({ data }) {
  return (
    <main className="">
      <Head>
        <title>Techoland | Inicio</title>
      </Head>
      <Hero bg={"bg-[url('/hero-image.JPG')]"}>
        <Banner />
      </Hero>
      <AliadosPlaskolite />
      <ProductsList data={data} />
      <AliadosPlazitPolygal />
    </main>
  );
}

export default Home;
