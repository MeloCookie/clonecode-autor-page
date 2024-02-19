import {Dispatch, SetStateAction} from "react";

export interface ToggleProps {
  isToggle: boolean
  setToggle: Dispatch<SetStateAction<boolean>>
}
