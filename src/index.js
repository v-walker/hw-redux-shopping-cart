import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Products from './components/Products';
import ItemDetail from './components/ItemDetail';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



// need to insert reducer
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/details/:id" element={<ItemDetail />}/>
        </Routes>
      </BaseLayout>
    </Router>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

