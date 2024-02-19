import List, {FooterList, SNSList} from "@components/List";

export default function Footer(){
  //
  return (
    <div
      className="w-full flex flex-col justify-between items-center gap-y-20 mb-12 mt-8

    ">
      <ul className="flex justify-around items-center flex-wrap
                     text-sm text-gray-700 max-w-[30rem]
                     md:max-w-full md:gap-20
      ">
        <List list={FooterList} liClass="px-10 md:p-0 mt-10"

        />
      </ul>
      <ul className="flex">
        <List list={SNSList}
              liClass="flex flex-row items-center flex-1 flex-wrap gap-10"
              className="p-4 text-3xl mx-4"
        />
      </ul>
      <p className="">
        @ 2024 Made with Material Tailwind by Creative Tim.
      </p>
    </div>
  )
}
