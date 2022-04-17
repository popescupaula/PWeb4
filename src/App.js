import Home from './routes/Home';
import Quizes from './routes/Quizes';
import Register from './routes/Register';
import AddQuiz from './routes/AddQuiz';
import AboutUs from './routes/AboutUs';
import Secret from './components/Secret';
import Quiz from './components/Quiz';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/aboutUs" element={<Secret Cmp={AboutUs}/>} />
        <Route exact path="/quizes" element={<Secret Cmp={Quizes}/>} />
        <Route exact path="/add" element={<Secret Cmp={AddQuiz}/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route path="/quizes/:id" element={<Secret Cmp={Quiz}/>} />

        <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      </Routes>
    </div>
  );
}

export default App;
