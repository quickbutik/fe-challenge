'use client'

export function AddToCartButton({ productId }: { productId: string }) {
  const addToCart = async () => {
    await fetch('/api/cart', {
      method: 'POST',
      body: JSON.stringify({ productId }),
    })
  }

  return (
    <button className="border px-2 py-1" onClick={addToCart}>
      Add to Cart
    </button>
  )
}
