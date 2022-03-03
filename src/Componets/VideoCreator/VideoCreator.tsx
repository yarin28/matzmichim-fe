
import React, { ComponentType, } from "react"
import { Avatar, Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, TextField, Typography, SelectChangeEvent, Button } from "@mui/material";
import { red } from '@mui/material/colors';
import { Link } from "react-router-dom";

interface VideoCardProps {
    title: string;//could name it "name"
    description: string;
    url: string;
    type: "ted" | "youtube" | "google photos" | undefined;
    uid: string;
}
const VideoCreator: ComponentType = (props) => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [type, setType] = React.useState("");
    const [uid, setUid] = React.useState("");
    const types = ["ted", "youtube", "google photos"];
    const handleTypesChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => { setTitle(event.target.value); };
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => { setDescription(event.target.value); };
    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => { setUrl(event.target.value); };

        const  submitVideo = () => {
            console.log(title, description, url, type, uid);
        }
    return (
        <>
            <Card
                sx={{
                    margin: 4,
                    width: '25ch',
                }} >
                <form>
                    <TextField
                        sx={{ margin: 1, }}
                        title="title"
                        id="outlined-required"
                        label="title of the video"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <TextField
                        sx={{ margin: 1, }}
                        title="description"
                        id="outlined-required"
                        label="description of the video"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <TextField
                        sx={{ margin: 1, }}
                        title="url"
                        id="outlined-required"
                        label="url of the video"
                        value={url}
                        onChange={handleUrlChange}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">type of video</InputLabel>
                        <Select
                            value={type}
                            label="type of video"
                            onChange={handleTypesChange}
                        >
                            {types?.map(option => {
                                return (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <Button onClick={submitVideo} variant="contained" color="success">
                        Submit
                    </Button>
                </form>
            </Card>
        </>);
};
export default VideoCreator;