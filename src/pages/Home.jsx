import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const skills = ['React', 'JavaScript', 'HTML/CSS', 'Git', 'UI/UX Básica', 'IHC'];

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <img
          src="/assets/foto-perfil.jpg"
          alt="Foto de perfil do desenvolvedor"
          className={styles.profilePic}
        />
        <p className={styles.greeting}></p>
        <h1 className={styles.name}>José Souza</h1>
        <h2 className={styles.role}>Estudante de ADS</h2>
        
        <p className={styles.bio}>
          Desenvolvo interfaces acessíveis e funcionais com foco em experiência do usuário.
          Este portfólio reúne meus projetos acadêmicos, demonstrações práticas e materiais de apresentação.
        </p>

        <div className={styles.skills}>
          {skills.map((tech, i) => (
            <span key={i} className={styles.tag}>{tech}</span>
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/projetos" className={`${styles.btn} ${styles.primary}`}>Ver Projetos</Link>
          <a href="mailto:jose.rbrito@souunit.com.br" className={styles.btn}>Entrar em Contato</a>
        </div>
      </div>
    </section>
  );
}