import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextLink } from '../components/NextLink'
import { Menu } from '@headlessui/react'
import { navBarLiStyle } from './../styles'

export interface RouteTemplateProps {
  route: string
  name: string
}

export const DesktopMenuTemplate = ({ route, name }: RouteTemplateProps) => {
  const router = useRouter()
  return (
    <li
      className={navBarLiStyle}
      key={`${name}desktop`}
    >
      <Link href={route} >
        <a className={router?.asPath == route ? "text-primary" : ""}>{name}</a>
      </Link>
    </li>
  )
}

export const MobileMenuTemplate = ({ route, name }: RouteTemplateProps) => {
  const router = useRouter()
  return (
    <Menu.Item
      key={`${name}mobile`}
    >
      {({ active }) => (
        <NextLink
          className={`${router?.asPath == route ? "text-primary" : ""} ${active && 'bg-secondary'} p-4`} href={route}>
          {name}
        </NextLink>
      )}
    </Menu.Item>
  )
}