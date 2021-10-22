import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BlogCard() {
  return (
    <Card className="border-none shadow-none">
      <CardMedia
        component="img"
        height="140"
        image="/images/computer.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h8"
          component="div"
          className="text-sm"
        >
          Nov 01 2020
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Work from home has taken new turn in the pandemic
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A quick guide to assisting users in the challenging steps from
          learning about your podcast on the web. A quick guide to assisting
          users in the challenging steps from learning about your podcast on the
          web.{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
