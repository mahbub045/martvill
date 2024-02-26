"use client";
import { Store } from "@/utils/Store";
import { useContext } from "react";

const ProductItem = ({ product }) => {
  const { state, dispatch } = useContext(Store);
  console.log(state); // Log the state to debug

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      alert("Sorry, Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <>
      <button
        className="md:max-w-[130px] max-w-[110px]  my-2 bg-white overflow-hidden rounded"
        type="button"
        onClick={addToCartHandler}
      >
        <img
          src={product.image}
          alt="Product"
          className="w-full h-36 object-cover"
        />
        <div className="text-center">
          <p className="my-1 text-gray-500 font-semibold">${product.price}</p>
          <hr />
          <h2 className="mt-1 mb-2 text-xs font-semibold text-gray-800 line-clamp-1 px-1">
            {product.productName}
          </h2>
        </div>
      </button>
    </>
  );
};

export default ProductItem;
