import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>📁 MeuPortfólio</Link>
      <ul className={styles.menu}>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/videos">Vídeos</Link></li>
        <li><Link to="/apresentacoes">Slides</Link></li>
      </ul>
    </nav>
  );
}