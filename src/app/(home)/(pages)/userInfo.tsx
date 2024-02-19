import Image from "next/image";
import avatar from "@public/image/avatar1.jpg";
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/outline";


const UserData = {
  Posts: "323", Followers: "3.5k", Following: "260"
}

export default function UserInfo(){
  return (
    <header
      className="
        flex justify-center items-start mx-auto mb-14"
    >
      <div
        className="
            flex flex-col h-[33.25rem] -mt-32 max-w-[64rem]
            bg-opacity-0
          "
      >
        <div className="flex flex-col p-8 mx-3">
          <Image
            src={avatar} alt="avatar image"
            width="160" height="160"
            className="rounded-xl"
          />
        </div>
        <div id="User-info" className="flex flex-col p-7 px-10  gap-y-3.5">
          <div className="flex justify-between pr-8">
            <h1 className="flex text-3xl font-semibold mb-1">
              Emma Roberts
            </h1>
            <button className="
                font-semibold text-xs p-1 px-5
                bg-[#212121] text-white rounded-lg
              ">
              FOLLOW
            </button>
          </div>
          <ul id="User-data"
              className="flex gap-4"
          >
            {
              Object.entries(UserData).map(([key, value]) => {
                return (
                  <li key={key} className="flex gap-2">
                    <p className="font-semibold">{value}</p>
                    <p>{key}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="px-11 mt-1.5 w-full">
          <p className="text-lg text-gray-400 max-w-[60rem]">
            A wordsmith who believes in the power of language to shape
            our world, inspire change, and connect us all. I bring a unique
            perspective to the writing, blending the knowledge and experiences
            into thought -provoking narratives.
          </p>
        </div>
        <Link href="/about-us/page"
              className="p-2 mt-7 mx-14 text-xs font-semibold flex gap-1 w-36"
        >
          MORE ABOUT ME
          <ArrowRightIcon
            width="15" height="15" color="black" strokeWidth="3"
          />
        </Link>
      </div>
    </header>
  )
}
