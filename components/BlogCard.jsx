import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowIcon from "./vectors/ArrowIcon";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

export default function BlogCard({
  date,
  title = "Work from home has taken new turn in the pandemic",
  desc = "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting  users in the challenging steps from learning about your podcast on the web.",
  img,
}) {
  return (
    <Card className="border-none shadow-none">
      <CardMedia
        component="img"
        height="140"
        image="/images/computer.png"
        alt="green iguana"
      />
      <CardContent className="px-0">
        <Typography
          gutterBottom
          variant="h8"
          component="div"
          className="text-[0.6rem] lg:text-sm "
        >
          {date}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" className="text-sm lg:text-xl lg:py-0   py-2 lg:pb-5">
          {title}
        </Typography>
        <Typography variant="body2" className="text-[#666666] text-sm lg:text-xl">
          {desc}
        </Typography>
      </CardContent>
      <CardActions className="px-0">
        <Button size="small" className="text-black text-[0.6rem] lg:text-base">Read More</Button>
        <IconButton aria-label="add to favorites">
          <ArrowIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
