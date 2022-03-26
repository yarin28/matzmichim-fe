
import { Avatar, Card, CardContent, CardHeader, styled, Typography } from "@mui/material";
import { ComponentType } from "react";
interface CommentProps {
    firstName: string;
    lastName: string;
    course: string;
    comment: string;
    iconColor?: string;
}
const MyComponent = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
});
const Comment: ComponentType<CommentProps> = (props) => {

const StyledCard = styled(Card)`
direction: ${props.firstName.charCodeAt(0)>90? 'rtl' : 'ltr'} ;
max-width: 500px;
display: "flex",
flex-direction: "column",
align-items: "flex-start",
padding: "0px",

position: "static",
width: "752px",
height: "278px",
left: "0px",
top: "184px",

/* Light/Background/Paper */

background: #FFFFFF;
/* Elevation/1 */

box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12);
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 24px 0px;
`;
    return (
        <>
            <StyledCard>
                <CardHeader
                    avatar={<Avatar sx={{bgcolor:props.iconColor}}>{props.firstName.at(0)}</Avatar>}
                    // action={
                    //     <IconButton aria-label="settings">
                    //         <MoreVert/>
                    //     </IconButton>
                    // }
                    title={props.firstName + " " + props.lastName}
                    subheader={props.course}
                />

                <CardContent>
                    <Typography variant="body2">
                    {props.comment}
                    </Typography>
                </CardContent>
            </StyledCard>

        </>
    );
};
export default Comment;