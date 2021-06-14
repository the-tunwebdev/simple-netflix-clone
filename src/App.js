import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Navbar from './Navbar'
function App() {
  const nameOfmovie =['NETFLIX ORIGINALS','Trending Now','Top Rated','Action Movies','Comedy Movies',
  'Horror Movies','Romance Movies','Romance Movies','Documentaries'
  ]

  return (
    <div className="App">
      
      
      {/* {nameOfmovie.map(name=>(
        <Row key={name} title={name} fetchUrl={Object} />
      ))} */}
      
      <Navbar />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
       />
      <Row title='Trending Now' fetchUrl={requests.fetchTopRated}/>
      
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
      



    </div>
  );
}

export default App;
