import { Button, Typography } from "@mui/material"
import { GridCellParams, GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import ResultCell from "../ResultCell";

export const data_columns:GridColDef[]=[
  {field:"ID",headerName:"ID",description:"the israeli id of the user", width:100},
  {field:"Email",headerName:"Email",width:200},
  {field:"Full_name",headerName:"Full name",width:200},
  {field:"Phone",headerName:"Phone",width:200},
  {field:"Result",headerName:"Result",description:"the result of the server call" ,flex:1,
   renderCell: ResultCell,
  
  //  renderCell:(params:GridRenderCellParams<Array<Object>>)=>
  //  (
  //      <strong>{"gayb"}</strong>
  //  ),
  },
];
  //  renderCell:(params:GridCellParams)=>(<strong>{ (params.value.length>0)? params.value.ERROR_MESSAGE : "good" }</strong>),},