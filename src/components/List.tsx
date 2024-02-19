import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

/*------------*Icons*------------*/

import {LinkListMapProps, LinkListProps} from "@/types/type";
import Link from 'next/link'
import {TicketIcon} from "@heroicons/react/16/solid";

/*------------*Lists*------------*/

export const MenuList: LinkListMapProps[] = [
  {name: 'Home', href: '/', target: ''},
  {name: 'About Us', href: '/about-us', target: ''},
  {name: 'Contact Us', href: '/contactus', target: ''},
  {name: 'Docs', href: 'https://www.material-tailwind.com/docs/react/installation', target: '_blank'}
]

export const SNSList: LinkListMapProps[] = [
  {name: 'Facebook', href: 'https://facebook.com', icon: <FacebookIcon fontSize="inherit"/>, target: '_blank'},
  {name: 'Instagram', href: 'https://instgram.com', icon: <InstagramIcon fontSize="inherit"/>, target: '_blank'},
  {name: 'Twitter', href: 'https://twitter.com', icon: <TwitterIcon fontSize="inherit"/>, target: '_blank'}
]

export const FooterList: LinkListMapProps[] = [
  {name: 'Company', href: '/company'},
  {name: 'About Us', href: '/about-us'},
  {name: 'Team', href: '/team'},
  {name: 'Product', href: '/product'},
  {name: 'Blog', href: '/blog'},
  {name: 'Pricing', href: '/pricing'},
]

export const ContactList = [
  {
    name: 'Phone number', item: '+1(424) 535 3523',
    href: 'https://facebook.com', additionalHref: '/TY',
    icon: <PhoneIphoneIcon/>
  },
  {
    name: 'Email', item: 'hello@gmail.com',
    href: 'https://instgram.com', additionalHref: '/TY',
    icon: <EmailIcon/>
  },
  {
    name: 'Phone number', item: 'Open Support Ticket',
    href: 'https://twitter.com', additionalHref: '/TY',
    icon: <ConfirmationNumberIcon />
  },
]

/*------------*Functions*------------*/

const List = (list: LinkListProps) => {

  return (
    <>
    {
      list.list.map((key) => {
        const addHref = key.additionalHref;
        if (addHref){
          key.href = [key.href,addHref].join('')
        }
      return (
        <li key={key.name} className={`
          ${list.liClass}
        `}>
          <Link
            key={key.name}
            href={key.href}
            target={key.target}
            className={list.className}
          >
            {key.icon
              ? key.icon
              : key.name
            }
            <p>{key.item}</p>
          </Link>
        </li>
        )
      })
    }
    </>
  )
}
export default List
