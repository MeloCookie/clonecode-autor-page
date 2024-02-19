import {useState} from "react";
import {ChangeProps} from "@/types/type";
import Link from "next/link";


const LoginButton = ({isChange}: ChangeProps) => {
  const [isLogged, setLogged] = useState(false)
  //로그인 기능 필요

  return (
    <ul className="
      flex justify-end items-center gap-2 text-xs font-semibold 
    ">
      {
        isLogged
          ?
        <>
          <li>
            <Link href="/">
            LOG OUT
            </Link>
          </li>
          <li>
            <Link href="/">
              UserAvatar
            </Link>
          </li>
        </>

        :
        <>
          <li className = {`
            flex h-10 w-24 items-center justify-center rounded-lg
            ${isChange ? "bg-[]" : ""
            }`}>
            <Link href="/">
              LOG IN
            </Link>
          </li>
          <li className={`
            flex h-10 w-24 items-center justify-center rounded-lg  text-black
            ${isChange ? "bg-[#212121] text-white " : "bg-white"
          }`}>
            <Link
              href="https://www.material-tailwind.com/blocks"
              target="_blank"
            >
              BLOCKS
            </Link>
          </li>
        </>
      }
    </ul>
  )
}
export default LoginButton
