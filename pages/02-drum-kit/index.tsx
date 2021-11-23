import { NextPage } from "next";

import Layout from "@/components/Layout";
import Header from "@/components/Header";
import DrumKit from "@/components/DrumKit";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <Layout title="Drum Kit">
      <Header />
      <DrumKit />
      <Footer />
    </Layout>
  );
};

export default Home;
