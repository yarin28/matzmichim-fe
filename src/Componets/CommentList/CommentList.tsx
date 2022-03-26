

import { MoreVert, Watch } from "@mui/icons-material";
import { Alert, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Icon, IconButton, Paper, styled, TextField, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useState, useEffect, ComponentType } from "react";
import { mockCommentsDatabase } from "./mockCommentDatabase";
import  Comment  from "../Comment";
const CommentList: ComponentType = (props) => {

        return (<>
            {mockCommentsDatabase.map((comment, index) => {
                return <Comment key={index} firstName={comment.firstName} lastName={comment.lastName} course={comment.course} comment={comment.comment} iconColor={comment.iconColor} />
            })}
        </>
    );
};
export default CommentList;