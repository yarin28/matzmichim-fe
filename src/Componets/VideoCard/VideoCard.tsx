import React, { ComponentType,} from "react"
import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { red } from '@mui/material/colors';
import { Link } from "react-router-dom";

interface VideoCardProps {
    title: string;//could name it "name"
    description: string;
    url: string;
    type: "ted" | "youtube" | "google photos" |  undefined;
    uid: string;
}
const VideoCard: ComponentType<VideoCardProps> = (props) => {
    return(
    <>
        <Card sx={{ maxWidth: 345 }}>
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
 <a href={props.url}>{props.url}</a>
      </CardContent>
            
        </Card>
    
    
    </>);
};
export default VideoCard;