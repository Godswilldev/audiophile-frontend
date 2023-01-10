import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "components/buttons";
import { cartProductType } from "interfaces/interfaces";
import { useAppSelector, useAppDispatch } from "redux/store/store";
import router from "next/router";
import {
  decreaseQuantity,
  increaseQuantity,
  clearCartItems,
  getTotalPrice,
  removeFromCart,
} from "redux/reducers/cartReducer";
import DeleteIcon from "@mui/icons-material/Delete";

interface closeCart {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ setOpen }: closeCart) => {
  const dispatch = useAppDispatch();
  const total = useAppSelector(getTotalPrice);
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);

  return (
    <Box className="cart">
      {cartProducts.length === 0 ? (
        <Box className="cart__empty">
          <h1>Your Cart is Empty</h1>
          <span
            onClick={() => {
              router.push("/");
              setOpen(false);
            }}
          >
            <Button text={"Continue Shopping"} variant={"PINK_DARK"} />
          </span>
        </Box>
      ) : (
        <Box className="cart__filled">
          <Box className="cart__filled--header">
            <h1>Cart ({cartProducts.length})</h1>
            <button onClick={() => dispatch(clearCartItems())}>Remove all</button>
          </Box>

          <Box className="cart__filled--body">
            {cartProducts.map((product: cartProductType) => (
              <Box key={product.id} className="cart__items">
                <Box className="cart__items--desc">
                  <Box onClick={() => dispatch(removeFromCart(product.id))}>
                    <DeleteIcon className="deleteIcon" color="error" fontSize="large" />
                  </Box>
                  <Image
                    width={64}
                    height={64}
                    src={product.product.categoryImage}
                    alt={`${product.id} image`}
                    css={"border-radius:1rem"}
                  />
                  <span>
                    <h1>{product.product.name}</h1>
                    <h2>₦{product.product.price}</h2>
                  </span>
                </Box>

                <Box className="cart__items--btn">
                  <button
                    disabled={product.quantity === 1}
                    onClick={() => dispatch(decreaseQuantity(product.id))}
                  >
                    -
                  </button>
                  <h6> {product.quantity}</h6>

                  <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="cart__total">
            <span>
              <h2>TOTAL </h2>
              <h1>₦ {total}</h1>
            </span>
            <button
              onClick={() => {
                router.push("/checkout");
                setOpen(false);
              }}
            >
              CHECKOUT
            </button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
