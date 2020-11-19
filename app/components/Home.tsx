import React from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import {Button} from 'antd';
import DataTable from './DataTable';
import styles from './Home.css';

import 'antd/dist/antd.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <h2>List</h2>
      <Button type='primary' onClick={()=>console.log('12211')}>确定</Button>
      <DataTable />
    </div>
  );
}
