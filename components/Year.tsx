import React from 'react';
import styles from '../styles/Components.module.css';

const Year = (props: { article: { title: string; text: string } }) => {
  return (
    <div className={styles.year}>
      <h1>{props.article.title}</h1>
      {props.article.text}
    </div>
  );
};

export default Year;
