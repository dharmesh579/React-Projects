import NavBar from "./NavBar";

function Home() {
  return (
    <>
      

      <div className="container">
        <div className="hero">
          <h1>Welcome to MyStore 🚀</h1>
          <p>Best place to buy amazing products</p>
        </div>

        <h2>Featured Products</h2>

        <div className="products-preview">
          <div className="card">Product 1</div>
          <div className="card">Product 2</div>
          <div className="card">Product 3</div>
          <div className="card">Product 4</div>
        </div>
      </div>
    </>
  );
}

export default Home;
