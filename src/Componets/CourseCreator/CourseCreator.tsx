import { Alert, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState, useEffect, ComponentType } from "react";
import MockVideosDatabase from './VideosMockDatabase'
import VideoCard from "../VideoCard";
import CheckIcon from '@mui/icons-material/Check';


enum types { "ted", "youtube", "google photos" };
enum languages { "English", "Hebrew", "Arabic" };
const CourseCreator: ComponentType = () => {
  const [name, SetName] = useState("");
  const [requiredVideos, SetRequiredVideos] = useState<Array<any>>([]);//TODO: change the any to VideoCardProps
  const [voluntaryVideos, SetVoluntaryVideos] = useState<Array<any>>([]);
  const [selectingRequiredVideos, SetSelectingRequiredVideos] = useState(false);
  const [selectingVoluntaryVideos, SetSelectingVoluntaryVideos] = useState(false);
  const [users, SetUsers] = useState([]);
  const [timeRestriction, SetTimeRestriction] = useState(0);
  const [file, SetFile] = useState<File>();
  const [isFilePicked, SetIsFilePicked] = useState(false);
  const [Videos, SetVideos] = useState(MockVideosDatabase);
  const [formErrorMessage, SetFormErrorMessage] = useState("");
  const handleSelectedVideo = (uid: string) => {
    console.log(uid);
    if (selectingRequiredVideos) {
      SetRequiredVideos([...requiredVideos, Videos.find(video => video.uid === uid)]);
    } else if (selectingVoluntaryVideos) {
      SetVoluntaryVideos([...voluntaryVideos, Videos.find(video => video.uid === uid)]);
    }
    else {
      SetFormErrorMessage("Please select a video type");
    }
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid item xs={4}  >
          {/* //TODO: the form for adding the stuff for the course should be moving with the user while he scrolls */}
          <Paper sx={{ padding: 3 }}>
            <form>
              {/* //TODO:change the simple form to a react component form */}
              <TextField
                sx={{ margin: 1, }}
                title="name"
                id="outlined-required"
                label="name of the course"
                value={name}
                onChange={(event) => {
                  SetName(event.target.value);
                }}
              />
              <TextField
                sx={{ margin: 1, }}
                title="timeRestriction"
                id="outlined-required"
                label="time restriction"
                value={timeRestriction}
                onChange={(event) => {
                  SetTimeRestriction(parseInt(event.target.value));
                  //TODO: this is like the worse way to get an
                  // number but i will change it to a date picker 
                }}
              />
              <Button
                sx={{ margin: 1, }}
                disabled={selectingVoluntaryVideos ? true : false}
                color={selectingRequiredVideos ? "success" : "primary"}
                variant={"contained"}
                onClick={() => {
                  if(formErrorMessage !== ""){
                    SetFormErrorMessage("");
                  }
                  SetSelectingRequiredVideos(!selectingRequiredVideos);
                  SetSelectingVoluntaryVideos(false);
                }}>
                select required videos for the course
              </Button>
              <Button
                sx={{ margin: 1, }}
                disabled={selectingRequiredVideos ? true : false}
                color={selectingVoluntaryVideos ? "success" : "primary"}
                variant={"contained"}
                onClick={() => {
                  if(formErrorMessage !== ""){
                    SetFormErrorMessage("");
                  }
                  SetSelectingVoluntaryVideos(!selectingVoluntaryVideos);
                  SetSelectingRequiredVideos(false);
                }}>
                select voluntary videos for the course
              </Button>
              <Button
                variant="contained"
                component="label"
                color={isFilePicked ? "success" : "primary"}
              >
                Upload File
                <input
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const fileList = event.target.files;
                    if (!fileList) return;
                    SetFile(fileList[0]);
                    SetIsFilePicked(true);
                    console.log(fileList[0].name);
                    console.log(fileList[0]);

                  }}
                  type="file"
                  accept="xlsx, csv"
                  hidden
                />
              </Button>
              {formErrorMessage?
              < Alert  severity="error" variant="filled">
              {formErrorMessage}
              </Alert> : null}

            </form>
            <Typography variant="h6" gutterBottom>
              required videos - {requiredVideos.map(video => video.title).join(", ")}
            </Typography>
            <Typography variant="h6" gutterBottom>
              volantary videos - {voluntaryVideos.map(video => video.title).join(", ")}
            </Typography>
            
          </Paper>
        </Grid>
        <Grid item xs={8} container spacing={2}>
          {Videos?.map(video => {
            return (
              <Grid item xs>
                <Paper elevation={4}   >
                  <VideoCard title={video.title}
                    url={video.url}
                    type={video.type as keyof typeof types}
                    language={video.language as keyof typeof languages}
                    uid={video.uid}
                  />
                  <Button variant="contained" color="secondary" onClick={() => { handleSelectedVideo(video.uid) }}>Select Me</Button>

                </Paper>
              </Grid>
            )
          })
          }
        </Grid>
      </Grid>




    </>
  );
};
export default CourseCreator;
