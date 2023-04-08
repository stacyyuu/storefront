import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import cartSlice from "../../store/cart";
import productSlice from "../../store/products";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const SimpleCart = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {!cart.cartItems.length && (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              No items in cart.
            </Typography>
          )}

          {cart.cartItems.map((item) => (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {item.name}
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>${item.price}</p>
              </Typography>
              <Button
                onClick={() => {
                  dispatch(productSlice.actions.increaseStock(item.name));
                  dispatch(cartSlice.actions.removeCartItem(item));
                }}
              >
                Remove
              </Button>
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

export default SimpleCart;
