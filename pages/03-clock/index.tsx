import { NextPage } from "next";

import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Clock from "@/components/Clock";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <Layout title="Clock">
      <Header />
      <Clock />
      <Footer />
    </Layout>
  );
};

export default Home;
