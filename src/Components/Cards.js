import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../Styles/Cards.css";
import { Button, Rating } from "@mui/material";
import { useDispatch } from "react-redux";

import { addtoCart } from "../Redux/actions/actions";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Cards(props) {
  const [expanded, setExpanded] = React.useState(false);
  const { item, title, price, description, category, image, rate } = props;

  const dispatch = useDispatch();
  function handleClick(items) {
    dispatch(addtoCart(items));
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="cardLayout">
      <Card sx={{ maxWidth: 345 }}>
        {/* <div className="img"> */}
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="Paella dish"
        />
        {/* </div> */}
        <CardContent>
          <Typography variant="body2">{category}</Typography>
          <Typography paragraph>{title}</Typography>
          <Typography paragraph>${price}</Typography>
          <Typography variant="body2">
            <strong>rating: {rate}</strong>
          </Typography>
          <Rating value={rate} />

          <Button
            variant="secondary"
            onClick={() => handleClick(item)}
            className="Button"
          >
            Add to Cart
          </Button>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>{" "}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" paragraph>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
export default React.memo(Cards);
