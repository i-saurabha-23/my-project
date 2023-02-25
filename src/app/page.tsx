import Head from 'next/head'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GradGenius - Home</title>
        <meta name="description" content="GradGenius - All graduation study materials and academic support for students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to GradGenius!
        </h1>

        <p className={styles.description}>
          Get all the resources you need to excel in your studies and graduate with good grades.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Video Lectures &rarr;</h3>
            <p>Access video lectures from experts in various fields to help you understand complex topics.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>E-books &rarr;</h3>
            <p>Download e-books on various subjects to supplement your studies.</p>
          </a>

          <a href="past-papers.tsx" className={styles.card}>
            <h3>Past Question Papers &rarr;</h3>
            <p>Access past question papers to help you prepare for exams.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Academic Support &rarr;</h3>
            <p>Get academic support from experts in various fields to help you with your studies.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://gradgenius.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by GradGenius
        </a>
      </footer>
    </div>
  )
}
