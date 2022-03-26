
import React, { ComponentType, useEffect, } from "react"
import { Avatar, Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, TextField, Typography, SelectChangeEvent, Button, Container, Paper, Box  } from "@mui/material";
import { red } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { ThemeProvider } from "@emotion/react";
import theme from "../Theme"
interface ChipData {
    key: number;
    label: string;
}
/**
 * 
 * @description this is the main component of the course creator,
 * the purpose of this component is to create a video and add it the the database
 *  t
 * @todo 
 * 1.the component should use a theme
 * 2.the component should fetch the types of videos from a database not from itself
 * 3.there should be a validation for the video url (could be embeded)
 * 4. add validation for the language.
 * 5. the component should be able to add a new video to the database( literally)
 * 6. the form should use a grid
 * 7. implement the other type of videos input
 * 
 */
const VideoCreator: ComponentType = (props) => {
    //#region variables
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [length, setLength] = React.useState(0);
    const [url, setUrl] = React.useState("");
    const [typeOfVideo, setTypeOfVideo] = React.useState("");
    const [typeChipsArray, setTypeChipsArray] = React.useState<Array<ChipData>>([]);
    const [language, setLanguage] = React.useState("");
    const [uid, setUid] = React.useState("");
    const [disableSubmit, setdisableSubmit] = React.useState(true);
    const languages = ["English", "Hebrew", "Arabic", "Hebrew-Arabic"];
    //HACK the types array must be in the backend! this is just a hack.
    const typesOfVideosArray = ["health", "education", "technology", "fun", "boycott", "politics", "religion", "science", "sports", "other"];
    //#endregion
    //#region handle changes
    const handleLanguageChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
    };
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => { setTitle(event.target.value); };
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => { setDescription(event.target.value); };
    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => { setUrl(event.target.value); };
    const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => { setLength(parseInt(event.target.value)); };
    const handleTypeOfVideoChange = (event: SelectChangeEvent) => {
        setTypeOfVideo(event.target.value);
        const newTypeChip: ChipData = { key: typeChipsArray.length + 1, label: event.target.value };
        console.log(newTypeChip);
        setTypeChipsArray([...typeChipsArray, newTypeChip])
    };
    const handleChipDelete = (chipToDelete: ChipData) => () => {
        setTypeChipsArray((chips) => {
            return chips.filter((chip: ChipData) => chip.key !== chipToDelete.key);
        });
    };
    //#endregion
    //#region validation
    useEffect(() => {//HACK: this is a hack to make sure the form is not submitted until all the fields are filled,
        //but it is not a good solution, because its expensive to check if all the fields are filled every tine the user types in a field

        if (title.length > 0 && description.length > 0 && url.length > 0) {
            setdisableSubmit(false);
        }
        else {
            setdisableSubmit(true);
        }
    }, [title, description, url, uid]);
    //#endregion
    const submitVideo = () => {
        console.log(title, description, url, uid, typeChipsArray, language, length);
    }
    const header = () => {
        return (
            <>
                <Avatar sx={{ bgcolor: "red" }}>
                    <VideoCallIcon />
                </Avatar>
                <Typography variant="h5" align="center">
                    Create a new video
                </Typography>
            </>
        )
    }
    const informationCollected = () => {
        return (

            <>
                <Typography variant="h5" >
                    this infomation will be sent to the server and will be saved in the database -
                </Typography>
                <Typography variant="h6" >
                    <b>title</b> - {title} <br />
                    <b>description</b> - {description} <br />
                    <b>length</b> - {length} <br />
                    <b>url</b> - {url} <br />
                    <b>language</b> - {language} <br />
                    <b>types of video</b> - {typeChipsArray.map((data: ChipData) => { return data.label + " "; })} <br />
                </Typography>
            </>
        );
    }
    return (
        <ThemeProvider theme={theme}>
            <>
            <Container maxWidth="md">
                <Card sx={{
                    margin: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                }} >
                    {header()}
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
                        <TextField sx={{ margin: 1, }}
                            title="length"
                            id="outlined-required"
                            label="length of the video"
                            value={length}
                            onChange={handleLengthChange}
                            type="number"></TextField>
                        <TextField //TODO: add a validation for the url and its type
                            sx={{ margin: 1, }}
                            title="url"
                            type="url"
                            id="outlined-required"
                            label="url of the video"
                            value={url}
                            onChange={handleUrlChange}
                        />
                        <FormControl sx={{
                            width: '100%',
                            margin: 1,
                        }} >
                            <InputLabel id="demo-simple-select-label">language</InputLabel>
                            <Select
                                value={language}
                                label="language"
                                onChange={handleLanguageChange}
                            >
                                {languages?.map(option => {
                                    return (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    )
                                })}
                            </Select>

                        </FormControl>
                        {/* a component to insert types of videos to the chips list */}
                        <FormControl sx={{ width: '100%', margin: 1, }}>
                            <InputLabel id="demo-simple-select-label">type of video</InputLabel>
                            <Select
                                value={typeOfVideo}
                                label="please select the type of the video"
                                onChange={handleTypeOfVideoChange}
                            >
                                {typesOfVideosArray?.map(option => {
                                    return (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    )
                                })}
                            </Select>

                        </FormControl>
                        <Paper
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                listStyle: 'none',
                                p: 0.5,
                                m: 0,
                            }}
                            component="ul"
                        >
                            {typeChipsArray.map((data: ChipData) => {
                                return (
                                    <Box key={data.key}>
                                        <Chip
                                            label={data.label}
                                            onDelete={handleChipDelete(data)}
                                        />
                                    </Box>
                                );
                            })}
                        </Paper>

                        <Button onClick={submitVideo} disabled={disableSubmit} variant="contained" color="success" fullWidth>
                            Submit (TODO: disable the button until all the fields are filled)
                        </Button>
                        {informationCollected()}
                    </form>
                </Card>
            </Container>
        </>
        </ThemeProvider>
    );
};
export default VideoCreator;