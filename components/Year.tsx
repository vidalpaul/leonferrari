import React from 'react';
import styles from '../styles/Components.module.css';

const Year = (props: { year: string }) => {
  return <div className={styles.year}>{props.year}</div>;
};

export default Year;
