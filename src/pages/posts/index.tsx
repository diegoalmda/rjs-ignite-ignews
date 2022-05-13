import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>22 de março de 2022</time>
            <strong>Tendências tecnológicas para 2022</strong>
            <p>Após dois anos de pandemia é perceptível que a forma como consumimos mudou. Por isso, o Digital First será a o guia para 2022. Entenda esta e outras tendências.</p>
          </a>
          <a href='#'>
            <time>22 de março de 2022</time>
            <strong>Tendências tecnológicas para 2022</strong>
            <p>Após dois anos de pandemia é perceptível que a forma como consumimos mudou. Por isso, o Digital First será a o guia para 2022. Entenda esta e outras tendências.</p>
          </a>
          <a href='#'>
            <time>22 de março de 2022</time>
            <strong>Tendências tecnológicas para 2022</strong>
            <p>Após dois anos de pandemia é perceptível que a forma como consumimos mudou. Por isso, o Digital First será a o guia para 2022. Entenda esta e outras tendências.</p>
          </a>
          <a href='#'>
            <time>22 de março de 2022</time>
            <strong>Tendências tecnológicas para 2022</strong>
            <p>Após dois anos de pandemia é perceptível que a forma como consumimos mudou. Por isso, o Digital First será a o guia para 2022. Entenda esta e outras tendências.</p>
          </a>
        </div>
      </main>
    </>
  )
}