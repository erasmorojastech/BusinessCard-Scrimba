import styles from '../assets/styles/MainContent.module.css'

const MainContent = function () {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.name}>Laura Smith</h1>
        <p className={styles.title}>Frontend Developer</p>
        <p className={styles.website}>laurasmith.website</p>
      </header>
      <section className={styles.buttons}>
        <button className={`${styles.btn} ${styles.btn_email}`}>Email</button>
        <button className={`${styles.btn} ${styles.btn_linkedin}`}>LinkedIn</button>
      </section>
      <section className={styles.content}>
        <article>
          <h2 className={styles.content_title}>About</h2>
          <p className={styles.content_paragraphs}>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          <h2 className={`${styles.interests} ${styles.content_title}`}>Interests</h2>
          <p className={styles.content_paragraphs}>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </article>
      </section>
    </main>
  );
}

export default MainContent