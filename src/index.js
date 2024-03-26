import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/petLove">
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* <Toaster position="top-center" reverseOrder={true} /> */}
      {/* </PersistGate> */}
      <GlobalStyles />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
