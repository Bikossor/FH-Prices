import React from "react";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import LocalCafeRoundedIcon from "@material-ui/icons/LocalCafeRounded";
import HelpIcon from "@material-ui/icons/Help";
import { useRecoilState } from "recoil";
import { AboutDialogAtom, MenuDrawerAtom } from "../Atoms";

export const MenuDrawer = () => {
  const [menuDrawerState, setMenuDrawerState] = useRecoilState(MenuDrawerAtom);
  const [aboutDialogState, setAboutDialogState] =
    useRecoilState(AboutDialogAtom);

  const closeMenuDrawer = () => {
    setMenuDrawerState({ ...menuDrawerState, isOpen: false });
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={menuDrawerState.isOpen}
      onOpen={() => setMenuDrawerState({ ...menuDrawerState, isOpen: true })}
      onClose={closeMenuDrawer}
    >
      <List style={{ width: "320px" }}>
        <ListItem
          button
          component="button"
          onClick={() => {
            closeMenuDrawer();
            setAboutDialogState({ ...aboutDialogState, isOpen: true });
          }}
        >
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://ko-fi.com/bikossor"
          target="_blank"
        >
          <ListItemIcon>
            <LocalCafeRoundedIcon />
          </ListItemIcon>
          <ListItemText>Buy me a coffee</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};
