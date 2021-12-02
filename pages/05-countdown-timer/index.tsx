import { NextPage } from "next";

import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";

const Home: NextPage = () => (
  <Layout title="Countdown Timer">
    <Header />
    <CountdownTimer />
    <Footer />
  </Layout>
);

export default Home;
