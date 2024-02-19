import {DetailedHTMLProps, HTMLAttributes, Key, PropsWithChildren, ReactNode} from "react";
import {StaticImageData, StaticImport} from "next/dist/shared/lib/get-img-props";
/*------------**------------*/
export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement> & {
  key?: Key | null | undefined
  className?: string
}

export type ChangeProps = {
  isChange?: boolean

}

export type CardProps = ReactDivProps & {
  className?: string
  children?: ReactNode
  postData: PostData
}

export type ContainerProps = PropsWithChildren &
  ReactDivProps & {
  header?: string
}

export type PostData = {
  img?: string | StaticImport | StaticImageData
  title?: string
  desc?: string
  href: string | URL
}

/*------------*list*------------*/

export type ListProps = {
  name?: string //key
  item?: any
  icon?: string | ReactNode
}

export type LinkListMapProps = ListProps & {
  href: string
  additionalHref?: string
  target?: string
}

export type LinkListProps = ListProps & {
  list: LinkListMapProps[]
  className?: string
  liClass?: string
}

