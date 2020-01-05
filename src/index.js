import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { LoginProvider } from './contexts/LoginContext'
import { BlogProvider } from './contexts/BlogContext'
import { ArticleProvider } from './contexts/ArticleContext'
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <LoginProvider>
      <BlogProvider>
        <ArticleProvider>
          <App />
        </ArticleProvider>
      </BlogProvider>
    </LoginProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
