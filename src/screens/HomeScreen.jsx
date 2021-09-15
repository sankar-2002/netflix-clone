import React from 'react';
import Banner from '../Banner.jsx';
import Nav from '../Nav.jsx';
import requests from '../Requests.js';
import Row from '../Row.jsx';


function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />

            <Banner />

            <Row
                title="NETFLIX ORIGINALS"
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row
                title="Trending Now"
                fetchURL={requests.fetchTrending}
                isLargeRow
            />

            <Row
                title="Top Rated"
                fetchURL={requests.fetchTopRated}
                isLargeRow
            />

            <Row
                title="Action Movies"
                fetchURL={requests.fetchActionMovies}

            />

            <Row
                title="Comedy Movies"
                fetchURL={requests.fetchComedyMovies}

            />

            <Row
                title="Horror Movies"
                fetchURL={requests.fetchHorrorMovies}

            />

            <Row
                title="Romance"
                fetchURL={requests.fetchRomanceMovies}

            />

            <Row
                title="Documentaries"
                fetchURL={requests.fetchDocumentaries}
            />

        </div>

    )
}

export default HomeScreen
