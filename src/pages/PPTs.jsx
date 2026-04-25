import styles from './PPTs.module.css';

export default function PPTs() {
  const slides = [
    { 
      id: 1, 
      titulo: 'Portfolio', 
      url: '/assets/slides-mvc.pdf', 
      img: '/assets/thumb-mvc.jpg', 
      tipo: 'PDF', 
      paginas: 4 
    }
  ];

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>📄 Apresentações (Slides)</h1>
      <div className={styles.list}>
        {slides.map(s => (
          <a 
            key={s.id} 
            href={s.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.card}
            aria-label={`Abrir apresentação: ${s.titulo}`}
          >
            <div className={styles.mediaBox}>
              {s.img ? (
                <img 
                  src={s.img} 
                  alt={`Thumbnail da apresentação ${s.titulo}`} 
                  className={styles.mediaImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className={`${styles.mediaFallback} ${s.img ? '' : styles.visible}`}>
                📑
              </div>
            </div>
            <div className={styles.content}>
              <h3>{s.titulo}</h3>
              <span className={styles.meta}>{s.paginas} páginas • {s.tipo}</span>
            </div>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}