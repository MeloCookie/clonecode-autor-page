import {ReactNode} from "react";
/*------------*component*------------*/
import Header from "@app/layouts/header/header";
import Footer from "@app/layouts/footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>){
  return (

    <div
      id="root wrapper"
      className="
       flex flex-col grow  text-black bg-white
       antialiased text-pretty
    ">
      <div className="flex flex-col w-full justify-center items-center">
        <Header/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}
