import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SiderDemo from './page/SiderDemo';



import reportWebVitals from './reportWebVitals';
import Todo from './page/react/Todo';
import Todos from './page/react/Todos';
import MarkdownEditor from './page/Markdown';

// import Layout from 'antd/lib/layout/layout';

// From
ReactDOM.render(
  <React.StrictMode>
    <SiderDemo/>
    {/* <Buttons /> */}
    {/* <Bigbang /> */}
    {/* <Layout /> */}
    {/* <Timer /> */}
    {/* <Timers /> */}
    {/* <Todo /> */}
    {/* <Todos /> */}
    {/* <Modal /> */}
    {/* <Table /> */}
    {/* <EDG/> */}
    {/* <Tables/> */}
    {/* <tihuan/> */}
    {/* <Drawers/> */}
    {/* <Yemian/> */}

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();