import Head from 'next/head'
import styles from './Papers.module.css'

export default function PastPapers() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Past Question Papers - Your Site Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Past Question Papers
        </h1>

        <p className={styles.description}>
          Here you can find past question papers for various exams and courses.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Exam 1 &rarr;</h3>
            <p>Description of exam 1</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Exam 2 &rarr;</h3>
            <p>Description of exam 2</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Exam 3 &rarr;</h3>
            <p>Description of exam 3</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Exam 4 &rarr;</h3>
            <p>Description of exam 4</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'Your Site Name'}
        </a>
      </footer>
    </div>
  )
}
