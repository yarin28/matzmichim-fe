
import React, { ComponentType, useEffect, } from "react"
import { Avatar, Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, TextField, Typography, SelectChangeEvent, Button } from "@mui/material";
import { red } from '@mui/material/colors';
import { Link } from "react-router-dom";

interface VideoCardProps {
    title: string;//could name it "name"
    description?: string;
    url: string;
    type: "ted" | "youtube" | "google photos" | undefined;
    uid?: string;
}
const VideoCreator: ComponentType = (props) => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [type, setType] = React.useState("");
    const [uid, setUid] = React.useState("");
    const [disableSubmit,setdisableSubmit]=React.useState(true);
    const types = ["ted", "youtube", "google photos"];
    const handleTypesChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => { setTitle(event.target.value); };
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => { setDescription(event.target.value); };
    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => { setUrl(event.target.value); };
    useEffect(() => {//HACK: this is a hack to make sure the form is not submitted until all the fields are filled,
        //but it is not a good solution, because its expensive to check if all the fields are filled every tine the user types in a field

        if (title.length > 0 && description.length > 0 && url.length > 0 && type.length > 0 ) {
            setdisableSubmit(false);
        }
        else {
            setdisableSubmit(true);
        }
    }, [title, description, url, type, uid]);
        const  submitVideo = () => {
            console.log(title, description, url, type, uid);
        }
    return (
        <>
            <Card
                sx={{
                    margin: 4,
                    width: '25%',
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
                    <TextField //TODO: add a validation for the url and its type
                        sx={{ margin: 1, }}
                        title="url"
                        id="outlined-required"
                        label="url of the video"
                        value={url}
                        onChange={handleUrlChange}
                    />
                    <FormControl sx={{width:'25%',}} >
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
                    <Button onClick={submitVideo} disabled={disableSubmit} variant="contained" color="success" fullWidth>
                        Submit (TODO: disable the button until all the fields are filled)
                    </Button>
                    <Typography variant="h5" >
                        this infomation will be sent to the server and will be saved in the database - 
                    </Typography>
                    <Typography variant="h6" >
                    title - {title} <br />
                    description - {description} <br />
                    url - {url} <br />
                    type - {type} <br />
                    </Typography>
                </form>
            </Card>
        </>);
};
export default VideoCreator;