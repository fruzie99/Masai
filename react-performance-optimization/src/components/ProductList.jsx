function ProductList({ products, onProductSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Product List</h3>
      {products.slice(0, 10).map((product) => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
          <button onClick={() => onProductSelect(product)}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
