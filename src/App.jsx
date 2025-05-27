import Footer from "./components/Footer";
import Header from "./components/Header";
import PageRoutes from "./routes/Routes";
import "./css/App.css";

const App= () => {
  return (
    <div className="main">
      <Header/> 
      <PageRoutes/>
      <Footer/>
    </div>
   
  );
};

export default App;