import React, { useState } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";

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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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

type FilterDialogProps = {
  isOpen: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
};

const CarTypes: Array<{ id: string; name: string }> = [
  { id: "Classic-Muscle", name: "Classic Muscle" },
  { id: "Classic-Racers", name: "Classic Racers" },
  { id: "Classic-Rally", name: "Classic Rally" },
  { id: "Classic-Sports-Cars", name: "Classic Sports Cars" },
  { id: "Cult-Cars", name: "Cult Cars" },
  { id: "Extreme-Offroad", name: "Extreme Offroad" },
  { id: "Extreme-Track-Toys", name: "Extreme Track Toys" },
  { id: "GT-Cars", name: "GT Cars" },
  { id: "Hot-Hatch", name: "Hot Hatch" },
  { id: "Hypercars", name: "Hypercars" },
  { id: "Modern-Muscle", name: "Modern Muscle" },
  { id: "Modern-Rally", name: "Modern Rally" },
  { id: "Modern-Sports-Cars", name: "Modern Sports Cars" },
  { id: "Modern-Super-Cars", name: "Modern Super Cars" },
  { id: "Offroad", name: "Offroad" },
  { id: "Offroad-Buggies", name: "Offroad Buggies" },
  { id: "Rally-Monsters", name: "Rally Monsters" },
  { id: "Rare-Classics", name: "Rare Classics" },
  { id: "Retro-Hot-Hatch", name: "Retro Hot Hatch" },
  { id: "Retro-Muscle", name: "Retro Muscle" },
  { id: "Retro-Rally", name: "Retro Rally" },
  { id: "Retro-Saloons", name: "Retro Saloons" },
  { id: "Retro-Sports-Cars", name: "Retro Sports Cars" },
  { id: "Retro-Super-Cars", name: "Retro Super Cars" },
  { id: "Rods-and-Customs", name: "Rods and Customs" },
  { id: "Sports-Utility-Heroes", name: "Sports Utility Heroes" },
  { id: "Super-GT", name: "Super GT" },
  { id: "Super-Hot-Hatch", name: "Super Hot Hatch" },
  { id: "Super-Saloons", name: "Super Saloons" },
  { id: "Track-Toys", name: "Track Toys" },
  { id: "Trucks", name: "Trucks" },
  { id: "Vans-and-Utility", name: "Vans & Utility" },
  { id: "Vintage-Racers", name: "Vintage Racers" },
];

export default function FilterDialog({
  isOpen,
  handleClickOpen,
  handleClose,
}: FilterDialogProps) {
  const [state, setState] = useState<{ [key: string]: boolean }>({
    "Classic-Muscle": false,
    "Classic-Racers": false,
    "Classic-Rally": false,
    "Classic-Sports-Cars": false,
    "Cult-Cars": false,
    "Extreme-Offroad": false,
    "Extreme-Track-Toys": false,
    "GT-Cars": false,
    "Hot-Hatch": false,
    Hypercars: false,
    "Modern-Muscle": false,
    "Modern-Rally": false,
    "Modern-Sports-Cars": false,
    "Modern-Super-Cars": false,
    Offroad: false,
    "Offroad-Buggies": false,
    "Rally-Monsters": false,
    "Rare-Classics": false,
    "Retro-Hot-Hatch": false,
    "Retro-Muscle": false,
    "Retro-Rally": false,
    "Retro-Saloons": false,
    "Retro-Sports-Cars": false,
    "Retro-Super-Cars": false,
    "Rods-and-Customs": false,
    "Sports-Utility-Heroes": false,
    "Super-GT": false,
    "Super-Hot-Hatch": false,
    "Super-Saloons": false,
    "Track-Toys": false,
    Trucks: false,
    "Vans-and-Utility": false,
    "Vintage-Racers": false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      fullWidth={true}
      maxWidth="xs"
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Filter results
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="h6">Types</Typography>
        <div style={{ marginLeft: "1rem" }}>
          <FormGroup>
            {CarTypes.map((carType) => (
              <FormControlLabel
                key={carType.id}
                control={
                  <Checkbox
                    key={carType.id}
                    checked={state[carType.id]}
                    onChange={handleChange}
                    name={carType.id}
                  />
                }
                label={carType.name}
              />
            ))}
          </FormGroup>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button autoFocus onClick={handleClose} color="secondary" variant="contained">
          Filter
        </Button>
      </DialogActions>
    </Dialog>
  );
}
