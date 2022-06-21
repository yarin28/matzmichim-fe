import React, { ComponentType, } from "react"
import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { red } from '@mui/material/colors';
import { Link } from "react-router-dom";

interface VideoCardProps {
  title: string;//could name it "name"
  description?: string;
  length?: number;
  url: string;
  language?: "English" | "Hebrew" | "Arabic" | undefined;
  type: "ted" | "youtube" | "google photos" | undefined;
  uid?: string;
}
const VideoCard: ComponentType<VideoCardProps> = (props) => {
  const embedIdFromUrl = (url: string) => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
  };
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: 1, minWidth: 300 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.type?.charAt(0)}
            </Avatar>
          }
          title={<a href={props.url}>{props.title}</a>}
          subheader={props.description}
        />
        <CardContent>
 <iframe
      width="300"
      height="200"
      src={`https://www.youtube.com/embed/${embedIdFromUrl(props.url)}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
          <b>language</b> - {props?.language ? props.language : "non in db"}<br />
          <b>length</b> - {props?.length ? props.length : "non in db"}<br />
          <b>uid</b> -  {props?.uid}
        </CardContent>

      </Card>


    </>);
};
export default VideoCard;