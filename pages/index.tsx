import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import fs from 'fs/promises';
import path from 'path';

import { data } from '../components/data';
import Year from '../components/Year';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title translate='no'>León Ferrari</title>
        <meta name='description' content='Life and work of León Ferrari' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.landing}>
          <div className={styles.bgImg}></div>
          <div className={styles.timeNav}>
            {data.map((article, i) => {
              return (
                <div className={styles.navlink} key={i}>
                  <a href={`#${i}`}>{article.title}</a>
                </div>
              );
            })}
          </div>
          <h1 className={styles.title}>león ferrari · life and work</h1>
        </div>

        {data.map((article, i) => {
          return <Year key={i} article={article} />;
        })}
      </main>
    </div>
  );
}
