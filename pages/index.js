import Head from "next/head";
import Header from "../components/Header";
import ModelS from "../components/ModelS";
import ModelX from "../components/ModelX";
import ModelY from "../components/ModelY";
import Navbar from "../components/Navbar";
import SolarPanel from "../components/SolarPanels";
import SolarRoof from "../components/SolerRoof";

export default function Home() {
  return (
    <>
      <Head>Tesla Clone</Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Navbar />
      <Header />
      <ModelY />
      <ModelS />
      <ModelX />
      <SolarPanel />
      <SolarRoof />
    </>
  );
}
