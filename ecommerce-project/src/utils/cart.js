import axios from "axios"

export async function addToCart(loadCart, product, quantity, addProductToCart) {
  await axios.post('/api/cart-items', {
    productId: product.id,
    quantity: Number(quantity)
  });
  await loadCart();
  addProductToCart();
}