import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowIcon from "./vectors/ArrowIcon";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

export default function PostCard({
  date,
  title = "Work from home has taken new turn in the pandemic",
  desc = "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting  users in the challenging steps from learning about your podcast on the web.",
  img,
}) {
  return (
    <Card className="border-none shadow-none post-card">
      <div
        className="h-56 w-full relative"
        style={{
          background: `url("/images/computer.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="post-title z-20 absolute bottom-0 right-0 left-0   px-4 py-2">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className=" w-9/12 text-[0.9rem] lg:text-[1.24rem]"
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h8"
            component="div"
            className="text-[0.6rem] lg:text-[0.7rem] w-9/12 "
          >
            {date}
          </Typography>
        </div>
      </div>

      <div className="mt-6">
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-[0.9rem]"
        >
          {desc}
        </Typography>
      </div>
      <Button size="small" className="text-black">
        Read More
      </Button>
      <IconButton aria-label="add to favorites">
        <ArrowIcon />
      </IconButton>
    </Card>
  );
}
