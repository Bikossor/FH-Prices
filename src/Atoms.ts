import { atom } from "recoil";
import { FH4 } from "./data/FH4";

export const Entries = atom({
    key: "entries",
    default: FH4,
});

export const MenuDrawerAtom = atom({
    key: "menudrawer",
    default: {
        isOpen: false,
    }
});

export const AboutDialogAtom = atom({
    key: "aboutdialog",
    default: {
        isOpen: false,
    }
});
