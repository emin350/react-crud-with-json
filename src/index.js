import * as React from "react";
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


