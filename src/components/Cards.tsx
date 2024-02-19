import {CardProps} from "@/types/type";
import Image from "next/image";
import Link from "next/link";

export const BlogCard  = (
  {className: _className, postData}: CardProps
) => {

  return (
    <div id="card" className={`
      flex flex-col justify-between rounded-xl flex-1 max-h-[27rem]
      basis-2/5 lg:basis-0 gap-6
      ${postData.img
      ? ""
      : "bg-[#191919] text-white"}
      `}>
      {postData.img ?
        <div className="flex">
          <Image
            src={postData.img} alt=" "
            loading="lazy"
            width="768" height="768"
            className="flex rounded-xl h-[14rem]"
          />
        </div>
        : <></>
      }
      <div className={`
        flex flex-col grow gap-4 font-semibold
       ${postData.img
        ? ""
        : "px-6 py-24 justify-between text-gray-100"
      }`}>
        <div className={`
          ${postData.img ? "text-xl" : "text-3xl "}
        `}>
          <Link href={postData.href}>
            {postData.title}
          </Link>
        </div>
        <div className={`
           text-sm
          ${postData.img ? "text-gray-500 font-light" : ""}
        `}>
          {postData.desc}
        </div>
        <Link
          href={postData.href}
          className={`mx-4 p-2 text-xs 
          ${postData.img ? "" : "font-bold w-fit"}
        `}>
          READ MORE
        </Link>
      </div>
    </div>
  )
}
