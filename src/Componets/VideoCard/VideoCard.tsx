import React, { ComponentType,} from "react"
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
    return(
    <>
        />
        <CardContent>
          <b>language</b> - {props?.language ? props.language : "non in db"}<br />
          <b>length</b> - {props?.length ? props.length : "non in db"}<br />
          <b>uid</b> -  {props?.uid}
        </CardContent>

    </>);
};
export default VideoCard;