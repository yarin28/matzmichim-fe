import { Typography } from "@mui/material"
import React, { ComponentType } from "react"
import { useTranslation } from "react-i18next"
const Home: ComponentType = (props) => {
    const {t} = useTranslation()
    return(
        <>
        {/* <Typography variant="h1" > this is the home page for the app</Typography> */}
        <Typography variant="h1" > {t("welcome to home page")}</Typography>
        </>
    )}
    export default Home;