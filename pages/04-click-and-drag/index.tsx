import ClickAndDrag from "@/components/ClickAndDrag";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { NextPage } from "next";

const Home: NextPage = () => (
  <Layout title="Click and Drag">
    <Header />
    <ClickAndDrag />
    <Footer />
  </Layout>
);

export default Home;
