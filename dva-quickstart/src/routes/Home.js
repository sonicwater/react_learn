import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>sonicwater!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>练习.</li>
        <li>123</li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
