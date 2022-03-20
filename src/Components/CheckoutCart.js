import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../Styles/Cards.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/actions/actions";

function CheckoutCart(props) {
  const dispatch = useDispatch();
  const { title, price, category, image, item } = props;

  function handleRemove(item) {
    dispatch(remove(item));
  }
  return (
    <div className="cardLayout">
      <Card>
        <div className="img">
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="Paella dish"
            className="img1"
          />
        </div>
        <CardContent>
          <Typography variant="body2">{category}</Typography>
          <Typography paragraph>{title}</Typography>
          <Typography paragraph>${price}</Typography>
          <Button onClick={() => handleRemove(item)}>Remove item</Button>
        </CardContent>
      </Card>
    </div>
  );
}
export default CheckoutCart;
