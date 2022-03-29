import { Alert, Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useState, useEffect, ComponentType } from "react";


const Test: ComponentType = () => {

    return (
        <>
            <Box sx={{ color: "#E5E5E5", background: "#E5E5E5" }}>
                <Paper elevation={0} sx={{ background: "#E5E5E5", borderRadius: "25px" }}>

                    <Grid container spacing={0} justifyContent="flex-start" alignItems="center" >
                        <Grid item xs={1}>
                            <Avatar alt="gordon ramsey" src="" />
                        </Grid>

                        <Grid item xs={11}>
                            <Box >
                                <Typography variant="h6" sx={{  color: "#6360FF", fontWeight: 700 }}>
                                    name of the commenter
                                </Typography>
                                <Typography variant="h6" sx={{ margin: 1, }}>
                                    sadsadf
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

        </>
    );
};
export default Test;
{/* sx={{ display: "flex", alignItems: "center",justifyContent:"center" }} */ }