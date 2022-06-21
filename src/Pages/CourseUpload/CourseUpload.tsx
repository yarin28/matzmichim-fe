import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ComponentType, useState } from "react";
import UsersCsvGrid from "../../Componets/UsersCsvGrid";
import RowInterface from "../../Componets/UsersCsvGrid/UsersCsvGrid";
import { useTranslation } from "react-i18next";

const CourseUpload: ComponentType = () => {
    const [csv_rows, setCsvRows] = useState<Array<typeof RowInterface>>([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState<File>();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [hasBeenValidated, setHasBeenValidated] = useState(false);
    const { t } = useTranslation();
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    }

    const sendForm = () => {
        let FD = new FormData();
        FD.append("course_name", name);
        FD.append("course_short_desc", description);
        FD.append("file", file!);//HACK: the file shouldn`t be null in here!!!
        const response = fetch("http://localhost:8090/admins/upload_csv", {
            method: "POST",
            body: FD,
        }).then(response => response.json()).then(response => setCsvRows(response));
    }
    const sendValidate = () => {

        let FD = new FormData();
        FD.append("file", file!);//HACK: the file shouldn`t be null in here!!!
        const response = fetch("http://localhost:8090/admins/validate_csv", {
            method: "POST",
            body: FD,
        }).then(response => response.json()).then(response => setCsvRows(response));
        setHasBeenValidated(true);
    }
    return (
        <div>
            <h1>{t('course upload title')}</h1>
            <Box
                component={"form"}
                sx={{ m: 1, p: 1, border: "1px solid black", borderRadius: "5px" }}
            >
                <ButtonGroup
                >                <TextField
                        sx={{ margin: 1 }}
                        label={t("course name")}
                        value={name}
                        onChange={handleNameChange} />
                    <TextField sx={{ margin: 1 }} label={t("course description")} value={description} onChange={handleDescriptionChange} />

                    <Button
                        variant="contained"
                        component="label"
                        color={isFilePicked ? "success" : "primary"}
                    >
                        {t("upload file")}
                        <input
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const fileList = event.target.files;
                                if (!fileList) return;
                                setFile(fileList[0]);
                                setIsFilePicked(true);
                                console.log(fileList[0].name);
                                console.log(fileList[0]);

                            }}
                            type="file"
                            accept="xlsx, csv"
                            hidden
                        />
                    </Button>

                    <Button variant="contained" disabled={hasBeenValidated === false} onClick={sendForm}>
                        {t('Upload')}
                    </Button>
                    <Button variant="contained" color="secondary" disabled={isFilePicked === false} onClick={sendValidate}>
                        {t('Validate')}
                    </Button>
                </ButtonGroup>
                <Typography variant="h6">
                    {`${t('course name')}: ${name}`}<br></br>
                    {`${t('course description')}: ${description}`}<br></br>
                    {`${t('File')}: ${file?.name}`}
                </Typography>
            </Box>
            <UsersCsvGrid rows={csv_rows} />
            <Typography variant="h3" >
                {t('notes on users upload file title')}
            </Typography>
            <Typography variant="body1"  >
                {t('notes on users upload file body')}
            </Typography>
        </div>
    );
}
export default CourseUpload;