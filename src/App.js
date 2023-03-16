
import './App.css';
import Form from './form.js';

const movies = [ 
  {name :"Avenger", available : 5},
  {name :"Animales Fantasticos", available:3 },
  {name :"Harry Potter", available:6}
]

function App() {
  return (
    <div>
      <h2>Peliculas</h2>
      {movies.map(movie => (
        <Form  movie = {movie} />
      ))}
    </div>
  );
}

export default App;
