import Head from "next/head";
import { AliadosPlazitPolygal, SliderHero } from "../components";
import AliadosPlaskolite from "../components/Aliados";
import Hero from "../components/Hero";
import ProductsList from "../components/Solucions";

export async function getServerSideProps() {
  try {
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
      <Hero bg={"bg-[url('/hero-image5.jpeg')] h-[35rem] md:h-[50rem]"}>
        <section className="max-w-screen-sm mx-auto md:max-w-screen-sm lg:max-w-screen-lg h-96 md:h-[35rem]">
          <div className=" slider-container flex justify-center items-center w-full md:max-w-screen-xl sm:w-full h-full">
            <SliderHero data={data} />
          </div>
        </section>
      </Hero>
      <AliadosPlaskolite />
      <ProductsList data={data} />
      <AliadosPlazitPolygal />
    </main>
  );
}

export default Home;
