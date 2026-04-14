import styles from './PPTs.module.css';

export default function PPTs() {
  const slides = [
    { id: 1, titulo: 'Arquitetura MVC', url: '/assets/slides-mvc.pdf', icon: '📊', pages: 12 },
    { id: 2, titulo: 'Defesa de Projeto Interdisciplinar', url: '/assets/slides-defesa.pdf', icon: '🎓', pages: 18 }
  ];

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>📄 Apresentações (Slides)</h1>
      <div className={styles.list}>
        {slides.map(s => (
          <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.iconBox}>{s.icon}</div>
            <div className={styles.content}>
              <h3>{s.titulo}</h3>
              <span className={styles.meta}>{s.pages} slides • PDF/PPTX</span>
            </div>
            <span className={styles.arrow}>→</span>
          </a>
        ))}
      </div>
    </section>
  );
}