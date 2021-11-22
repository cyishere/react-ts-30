import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <Layout title="JavaScript30 with React and TypeScript">
      <div className={styles.container}>
        <Header />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
