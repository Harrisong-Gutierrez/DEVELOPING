import Sticky from "@/components/Sticky";
import Categories from "@/components/Categories";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Offer from "@/components/Offer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sergent Major</title>
        <meta name="description" content="Generated by SMBS Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header
          logoHeight={52}
          logoWidth={104}
          title="Journées Sergent Major"
          imgCover="Header-cover"
          imgArrow="Arrow-img"
          paragraph={`Jusqu'à -40%* <span className="d-block">sur la Nouvelle Collection</span>`}
        />
        <Offer
          title="Membres Veepee"
          subtitle={`-10<span className="Offer-percentage">%</span> <span className="d-block Offer-subtitle-supplementary">SUPPLÉMENTAIRES</span>`}
        />
        <Categories title="Découvrez la sélection" />
        <Gallery alt="gallry-img" />
        <Sticky
          text={`<span className="d-block"> Jusqu'à <span className="Sticky-variant">-40% et 10% </span></span>supplémentaires avec le code <span className="Sticky-variant">VEEPEEJSM23</span>`}
        />
      </main>
    </>
  );
}
