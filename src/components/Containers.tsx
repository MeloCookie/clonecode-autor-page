import {ContainerProps} from "@/types/type";

export const Containers = ({
  className:_className, children
}: ContainerProps) => {
  const className = [
    'flex',_className
  ].join(' ')
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export const CardContainer = (
  {className: _className, children, header}: ContainerProps
) => {
  const className = [
    "flex flex-col w-11/12 mt-20 items-center"
    ,_className
  ].join(' ')
//640sm  768md  1024lg
  return (
    <div className={className} id="card-container">
      <div
        className="flex flex-col gap-16 justify-center p-20 md:p-0 "
      >
        <h1 className={`container
          flex flex-col text-3xl font-semibold justify-start
        `}>
          {header}
        </h1>
        <div
          id="card-wrraper"
          className={`
            flex gap-8 flex-col max-w-[52rem] justify-between
            md:flex-wrap md:flex-row lg:max-w-[85rem] 
          `}>
            {children}{/*cards*/}
        </div>
      </div>
    </div>
  )
}

