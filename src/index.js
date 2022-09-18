import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 


const container = document.getElementById('root');

// create a root
const root = ReactDOM.createRoot(container);

// render app to root
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
	);

// registerServiceWorker();