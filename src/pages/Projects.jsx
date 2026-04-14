import styles from './Projects.module.css';

export default function Projects() {
  const projetos = [
    { 
      id: 1, 
      nome: 'Projeto 1 (Em desenvolvimento)', 
      url: 'https://github.com/josesouza-hub/projeto-1', 
      desc: 'Fetch API, tratamento de erros e loading states.', 
      img: '/assets/projeto1.jpg',  // ← Sua imagem aqui
      icon: '📋'  // ← Fallback se a imagem falhar
    },
    { 
      id: 2, 
      nome: 'App de Clima (Em desenvolvimento)', 
      url: 'https://github.com/josesouza-hub/projeto-2', 
      desc: 'Consumo de API OpenWeatherMap com React.', 
      img: '/assets/projeto-clima.jpg',
      icon: '🌤️'
    }
  ];

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>🔗 Projetos</h1>
      <div className={styles.grid}>
        {projetos.map(p => (
          <article key={p.id} className={styles.card}>
            <div className={styles.cardMedia}>
              {p.img ? (
                <img 
                  src={p.img} 
                  alt={`Print do projeto ${p.nome}`} 
                  className={styles.cardImg}
                  onError={(e) => {
                    // Se a imagem falhar, mostra o ícone como fallback
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              {/* Fallback: ícone se não houver imagem ou se falhar */}
              <div className={`${styles.cardIcon} ${p.img ? '' : styles.visible}`}>
                {p.icon}
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>{p.nome}</h3>
              <p>{p.desc}</p>
              <a 
                href={p.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                Acessar no GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}