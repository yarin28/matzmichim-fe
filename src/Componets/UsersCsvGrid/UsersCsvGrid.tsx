import { RiceBowl } from "@mui/icons-material";
import { Box, darken, lighten } from "@mui/material";
import { GridRowsProp, DataGrid, GridColDef, GridCellParams, GridRowParams, GridToolbar, GridRowProps } from "@mui/x-data-grid";
import { ComponentType, useState } from "react";
import { ResultInterface } from "../ResultCell/ResultCell";
import { data_columns } from "./return_data";


const getBackgroundColor = (color: string, mode: string) =>
    mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color: string, mode: string) =>
    mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);


interface RowInterface {
    ID: string;
    Email: string;
    Full_name: string;
    Phone: string;
    RESULT: ResultInterface[];
}

interface UsersCsvGridProps {
    rows: any[];
    // rows?:Array<RowInterface>;
}
const UsersCsvGrid: ComponentType<UsersCsvGridProps> = (props) => {
    // const [rows, setRows] = useState(props.rows);
    const columns: GridColDef[] = [
        ...data_columns,
    ]

    const check_class_of_row = (params: GridRowParams) => {
        let class_name = "result-";
        if (params.row.RESULT.length === 0) return class_name + "empty";
        class_name += "isnt-empty ";
        params.row.RESULT.map((result: ResultInterface) => {
            if (result?.ERROR_PLACE) class_name += "row-error ";
            if (result?.ADDED) class_name += "row-added ";
            if (result?.UPDATED) class_name += "row-updated ";
            if (result?.NOTHING) class_name += "row-nothing ";
        });
        return class_name;
    }
    const check_cell_style_class = (params: GridCellParams<String | Object>) => {
        let style = "nothing";
        params.row.RESULT.forEach((element: ResultInterface) => {
            // console.log(`this is the element.error_place = ${element.ERROR_PLACE} and this is the params.field = ${params.field}`);
            if (element?.ERROR_PLACE === params.field) {
                style = "error";
            }
            if (element?.NEW_VALUE === params.formattedValue && params.field != "Result") {
                style = "updated";
            }
        });
        return style;
    }

    return (
        <Box
            sx={{
                display: "flex",
                direction: "ltr",
                p: 2,
                borderRadius: "5px",
                height: 800,
                width: '100%',
                '& .result-isnt-empty': {
                },
                '& .result-error': {
                    border: "2px dashed red",
                    // bgcolor:(theme)=>getBackgroundColor(theme.palette.warning.main,theme.palette.mode),
                    // '&:hover':{
                    //     bgcolor:(theme)=>getHoverBackgroundColor(theme.palette.warning.main,theme.palette.mode)
                    //     ,
                    // },
                },
                '& .result-empty': {
                    // bgcolor:(theme)=>getBackgroundColor(theme.palette.info.main,theme.palette.mode),
                    // '&:hover':{
                    //     bgcolor:(theme)=>getHoverBackgroundColor(theme.palette.warning.main,theme.palette.mode),
                    // },
                },
                '& .added': {
                    bgcolor: (theme) => getBackgroundColor(theme.palette.success.main, theme.palette.mode),
                    '&:hover': {
                        bgcolor: (theme) => getHoverBackgroundColor(theme.palette.success.main, theme.palette.mode),
                    },
                },

                '& .error ': {
                    bgcolor: (theme) => getBackgroundColor(theme.palette.error.main, theme.palette.mode),
                    '&:hover': {
                        bgcolor: (theme) => getHoverBackgroundColor(theme.palette.error.main, theme.palette.mode),
                    },

                },
                '& .updated ': {
                    bgcolor: (theme) => getBackgroundColor(theme.palette.success.main, theme.palette.mode),
                    '&:hover': {
                        bgcolor: (theme) => getHoverBackgroundColor(theme.palette.success.main, theme.palette.mode),
                    },
                },
                '& .row-updated': {
                    //     bgcolor:(theme)=>getBackgroundColor(theme.palette.info.main,theme.palette.mode),
                    //     '&:hover':{
                    //         bgcolor:(theme)=>getHoverBackgroundColor(theme.palette.info.main,theme.palette.mode),
                    // },
                },
                '& .row-nothing': {
                    //     bgcolor:(theme)=>getBackgroundColor(theme.palette.success.main,theme.palette.mode),
                    //     '&:hover':{
                    //         bgcolor:(theme)=>getHoverBackgroundColor(theme.palette.success.main,theme.palette.mode),
                    // },
                },
            }}>
            <DataGrid rows={props.rows}
                columns={columns}
                getRowId={(row) => row.ID}
                getRowClassName={(props) => check_class_of_row(props)}
                getCellClassName={(params: GridCellParams<String | Object>) => check_cell_style_class(params)}
                components={{
                    Toolbar: GridToolbar,
                }}
            />
        </Box>
    );
}
export default UsersCsvGrid;