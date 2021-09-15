import React from "react";
import {
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  ImageIcon
} from "@material-ui/core";

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary="Deadline">
          <li>{props.text}</li>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default Todo;
