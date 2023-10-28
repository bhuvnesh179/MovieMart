import MovieList from "./MovieList";
import Student from "./Student";
import NavBar from "./NavBar";

function App() {
  return (
    <>
    <NavBar />
    <MovieList />
    {/* <Student name="alexa" marks = {80}/>
    <Student name="Google" marks = {80}/>
    <Student name="Siri" marks = {80}/>
    <Student /> */}

    </>
  );
}

Student.defaultProps = {
  name: "Bansal",
  marks: 89
}
export default App;
