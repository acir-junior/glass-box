import { div } from 'prelude-ls';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from'./components/header/header'

ReactDOM.render( 
	<div>
		<Header></Header>
	</div>,
	document.getElementById('root')
);