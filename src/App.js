import React from 'react';
import './style.css'
import Header from './components/header'
import Main from './components/main'
import Features from './components/features'
import Footer from './components/footer'
//import Calendar from './components/calendar'
//import Details from './components/details'

function App() {
	return (
		<>
			<Header />
			<Main />
			<Features />
			{/* <Calendar /> */}
			{/* <Details /> */}
			<Footer />
		</>
	);
}

export default App;
