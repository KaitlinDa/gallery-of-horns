function App() {
  return (
    <>
    <Header title="React Tracker" />
    <Main />
    <Footer year="2023"/>
    </>
  );
}

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

function Main() {
  return <h2> Main here </h2>
}

function Footer(props) {
  return <h2> &copy Kaitlin Davis; {props.year}</h2>
}

export default App;
