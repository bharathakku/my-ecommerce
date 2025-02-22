import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} /> 
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
