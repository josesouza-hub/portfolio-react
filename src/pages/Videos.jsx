import styles from './Videos.module.css';

export default function Videos() {
  const videos = [
    { id: 1, titulo: 'Apresentação do projeto', src: '/assets/Demo1.mp4', thumb: '/assets/thumb1.jpg', icon: '🎬' },
    //{ id: 2, titulo: 'Apresentação: Consumo de API', src: '/assets/demo2.mp4', thumb: '/assets/thumb2.jpg', icon: '🎥' },
    //{ id: 3, titulo: 'Apresentação: Consumo de API', src: '/assets/demo3.mp4', thumb: '/assets/thumb2.jpg', icon: '🎥' }
  ];

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>🎬 Vídeos</h1>
      <div className={styles.grid}>
        {videos.map(v => (
          <article key={v.id} className={styles.card}>
            <video controls poster={v.thumb} className={styles.video}>
              <source src={v.src} type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
            <div className={styles.info}>
              <span className={styles.icon}>{v.icon}</span>
              <h3>{v.titulo}</h3>
            </div>
          </article>
        ))}
      </div>    
    </section>
  );
}