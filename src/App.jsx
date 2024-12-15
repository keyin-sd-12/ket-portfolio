import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ShowHtml from "./components/ShowHtml.jsx";
import ShowJS from "./components/ShowJS.jsx";
import ShowReact from "./components/ShowReact.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <ShowHtml />
        <ShowJS />
        <ShowReact />
      </main>
      <Footer />
    </>
  );
}

export default App;
