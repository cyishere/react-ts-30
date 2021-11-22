import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import { PROJECTS } from "@/data/projects";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Home: NextPage = () => {
  return (
    <Layout title="JavaScript30 with React and TypeScript">
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <PageHeader />
          <section className={styles.projectGrid}>
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
