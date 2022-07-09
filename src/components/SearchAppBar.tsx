import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import ClearIcon from "@material-ui/icons/Clear";
import { Button, InputAdornment } from "@material-ui/core";
import FilterDialog from "./FilterDialog";
import { useRecoilState } from "recoil";
import { MenuDrawerAtom, EntryFilterAtom } from "../Atoms";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    filterButton: {
      marginLeft: theme.spacing(2),
    },
    clearButton: {
      color: theme.palette.common.white,
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
      width: "100%",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);

export default function SearchAppBar() {
  const classes = useStyles();
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);
  const [menuDrawerState, setMenuDrawerState] = useRecoilState(MenuDrawerAtom);
  const [entryFilterState, setEntryFilterState] = useRecoilState(EntryFilterAtom);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() =>
              setMenuDrawerState({ ...menuDrawerState, isOpen: true })
            }
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {"FH-Prices"}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              autoFocus={true}
              value={entryFilterState.searchText}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => {
                setEntryFilterState({
                  ...entryFilterState,
                  searchText: event.currentTarget.value,
                });
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    title="Clear search text"
                    aria-label="Clear search text"
                    onClick={() => {
                      setEntryFilterState({
                        ...entryFilterState,
                        searchText: "",
                      });
                    }}
                    className={classes.clearButton}
                    style={
                      entryFilterState.searchText === ""
                        ? { visibility: "hidden" }
                        : { visibility: "visible" }
                    }
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <Button
            variant="text"
            color="inherit"
            className={classes.filterButton}
            startIcon={<FilterListRoundedIcon />}
            onClick={() => setFilterDialogOpen(true)}
            style={{ display: "none" }}
          >
            Filter
          </Button>
        </Toolbar>
      </AppBar>
      <FilterDialog
        isOpen={isFilterDialogOpen}
        handleClickOpen={() => setFilterDialogOpen(true)}
        handleClose={() => setFilterDialogOpen(false)}
      />
    </div>
  );
}
