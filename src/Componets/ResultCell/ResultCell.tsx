import { Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid"
import { Component, ComponentType } from "react"
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
   export interface ResultInterface {
        NEW_VALUE: string;
        NOTHING?:string;
        UPDATED?: string;
        ADDED?: string;
        ERROR_PLACE?: string;
        ERROR_MESSAGE?: string;
    }
    const choose_result_icon = (results:ResultInterface[]) => {
        let icon = <CheckCircleIcon color="primary"/>;
        results.map((result_array_item:ResultInterface) => {
        if (result_array_item?.ERROR_PLACE) {
            icon= <ErrorIcon color="error"/>
        };
        if(result_array_item?.ADDED) {
            icon= <AddBoxIcon color="success"/>
        };
        if(result_array_item?.UPDATED) {
            icon= <SystemUpdateAltIcon color="primary"/>
        };
        if (result_array_item?.NOTHING) {
            icon = <CheckIcon color="primary"/>
        }

    });
    return icon;
    }
    const result_list_summary = (results:ResultInterface[]) => {
    let result_list ="";
     results.map((result_array_item:ResultInterface) => {
        let key : keyof ResultInterface
        for ( key in result_array_item) {
            if (result_array_item.hasOwnProperty(key)) {
                result_list += `${result_array_item[key]} \n`;
                // result_list += `${key}: ${result_array_item[key]} \n`;
            }
        }
    });
    return result_list;
}
const ResultCell = (props:GridRenderCellParams) => {
    return (
        <Typography variant="body1" color="textPrimary">
            { choose_result_icon(props.row.RESULT)}
            { 
            (props.row.RESULT.length)?(" "):("its all good") 
            }
            {
            result_list_summary(props.row.RESULT)
            }
        </Typography>
    );
};
export default ResultCell;