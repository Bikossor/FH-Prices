import { atom } from "recoil";
import { FH4 } from "./data/FH4";

export const Entries = atom({
    key: "entries",
    default: FH4,
});
