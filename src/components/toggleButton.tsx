import {ToggleProps} from "@/types/interfaces";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";

const ToggleButton = ({toggle}: {toggle: ToggleProps}) => {
  const onClick= () => {
    toggle.setToggle(val => !val)
  }
  return (
    <button onClick={onClick}>
      {toggle.isToggle
        ? <ClearIcon className={``}/>
        : <MenuIcon className={``}/>
      }
    </button>
  )
}
