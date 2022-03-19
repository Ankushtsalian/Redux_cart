import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../Styles/Cards.css";

function CheckoutCart(props) {
  const { title, price, category, image } = props;

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
        </CardContent>
      </Card>
    </div>
  );
}
export default CheckoutCart;
