import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card, Button, Spinner } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
      <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "400px", textAlign: "center" }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.title} 
          style={{ height: "250px", objectFit: "contain", padding: "10px" }} 
        />
        <Card.Body>
          <Card.Title className="fw-bold">{product.title}</Card.Title>
          <Card.Text className="text-muted">${product.price}</Card.Text>
          <Card.Text style={{ fontSize: "14px", color: "#555" }}>
            {product.description.length > 100 ? product.description.slice(0, 100) + "..." : product.description}
          </Card.Text>
          <Button variant="primary" className="mt-2 w-100">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetails;
