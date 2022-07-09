import React, { useState } from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useRecoilState } from "recoil";
import { AboutDialogAtom } from "../Atoms";
import { Link, Divider } from "@material-ui/core";
import Package from "../../package.json";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const AboutDialog = () => {
  const [aboutDialogState, setAboutDialogState] = useRecoilState(AboutDialogAtom);

  const handleClose = () => {
    setAboutDialogState({ ...aboutDialogState, isOpen: false });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={aboutDialogState.isOpen}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        About
      </DialogTitle>
      <DialogContent>
        <Typography>
          This open-source application is for every Forza Horizon 4 driver who wants to
          know if a car is a good deal or not when buying it at the auction house. You can
          easily search by manufacturer or model name and compare prices.
        </Typography>
        <Divider style={{ margin: "1rem 0" }} />
        <Typography>
          View this project on{" "}
          <Link
            color="secondary"
            href="https://github.com/Bikossor/ForzaHorizonPrices"
            target="_blank"
          >
            GitHub
          </Link>
        </Typography>
        <Typography>App version: v{Package.version}</Typography>
        <Divider style={{ margin: "1rem 0" }} />
        <Typography>
          Developed by{" "}
          <Link color="secondary" href="https://github.com/Bikossor" target="_blank">
            André Lichtenthäler (Bikossor)
          </Link>
        </Typography>
        <Typography>
          Deployed by{" "}
          <Link color="secondary" href="https://pages.cloudflare.com/" target="_blank">
            Cloudflare Pages
          </Link>
        </Typography>
        <Typography>
          Data used from{" "}
          <Link color="secondary" href="http://www.manteomax.com/" target="_blank">
            ManteoMax's FORZA spreadsheets
          </Link>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="secondary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
