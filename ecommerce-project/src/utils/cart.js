import axios from "axios"

export async function addToCart(loadCart, product, quantity) {
  await axios.post('/api/cart-items', {
      productId: product.id,
      quantity
    })
    await loadCart();
}