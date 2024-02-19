import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import {ToggleProps} from "@/types/interfaces";
// interface ToggleProps {
//   isToggle: boolean
//   setToggle: Dispatch<SetStateAction<boolean>>
// }
//toggle: ToggleProps, isChange: boolean
const MenuButton = ({isChange, toggle}: {isChange: boolean, toggle: ToggleProps}) => {


  const onClick = () => {
    toggle.setToggle((val: boolean) => !val)
  }


  return (
    <div
      className={`
        lg:hidden block text-white px-1 py-2
        
      `}
    >
      <button onClick={onClick}>
        {toggle.isToggle
          ? <ClearIcon className={`${isChange? "text-black" : "text-white"}`}/>
          : <MenuIcon className={`${isChange? "text-black" : "text-white"}`}/>
        }
      </button>
    </div>
  )
}
export default MenuButton
