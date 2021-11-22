import Link from "next/link";
import Image from "next/image";

import styles from "./ProjectCard.module.css";
import { ProjectType } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className={styles.card}>
      <div className={styles.flag}>
        <span className={styles.text}>Day {project.id}</span>
      </div>
      <div className={styles.screenshot}>
        <Image
          src={project.screenshot}
          alt={project.title}
          width={310}
          height={180}
          layout="responsive"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.btnGroup}>
          <a
            className={`${styles.btn} ${styles.btnOutline}`}
            href={project.code}
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
          <Link href={project.demo} passHref>
            <a className={`${styles.btn} ${styles.btnPrimary}`}>Live Demo</a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
