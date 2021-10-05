import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import './App.css';
import Nav from './Nav';


const App = () => {
    return (
        <div className="app">
        <Nav/>
        <Banner/>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchTopRated} isLargeRow={true}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default App
