import { NextPage } from "next";

import Layout from "@/components/Layout";
import CSSVariables from "@/components/CSSVariables";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const index: NextPage = () => {
  return (
    <Layout title="Update CSS Variables with JavaScript">
      <Header />
      <CSSVariables />
      <Footer />
    </Layout>
  );
};

export default index;
