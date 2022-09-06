import { Icon } from '@iconify/react'
import { Menu, Transition } from '@headlessui/react'
import { Logo } from "components/Logo"
import { useEffect, useState } from "react"
import {
  navBarStyle,
  navBarLogoStyle,
  navBarUlStyle,
  navBarMenuMobuleButtonStyle,
  navBarMenuMobuleIconStyle,
  navBarMenuMobuleTransitionContextStyle,
  navBarMenuMobuleItemsStyle
} from './styles'
import { DesktopMenuTemplate, MobileMenuTemplate, RouteTemplateProps } from './templates/menuTemplate'
import { useTrackingScrolling } from 'hooks/useTrackingScrolling'

export interface HeaderStylesProps {
  menu: string
  logo: string
}

export interface HeaderMenuProps {
  routes: RouteTemplateProps[]
}

export const Header = ({ routes }: HeaderMenuProps) => {

  const [styles, setStyles] = useState<HeaderStylesProps>({
    menu: 'lg:py-8 lg:bg-transparent',
    logo: 'lg:w-56 lg:h-12'
  })

  const scrolling = useTrackingScrolling(styles)

  useEffect(() => {
    setStyles(scrolling)
  }, [scrolling])

  return (
    <header>
      <nav className={`${navBarStyle} ${styles.menu}`}>
        <div className={`${navBarLogoStyle} ${styles.logo}`}>
          <Logo width="auto" height="auto" />
        </div>

        <ul className={navBarUlStyle} aria-hidden='true'>
          {routes.map(DesktopMenuTemplate)}
        </ul>

        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className={navBarMenuMobuleButtonStyle}>
                <Icon className={navBarMenuMobuleIconStyle} icon="bx:menu" />
              </Menu.Button>
              <Transition
                show={open}
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-y-0 opacity-0"
                enterTo="transform scale-y-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-y-100 opacity-100"
                leaveTo="transform scale-y-0 opacity-0"
                className={navBarMenuMobuleTransitionContextStyle}
              >
                <Menu.Items static className={navBarMenuMobuleItemsStyle}>
                  {routes.map(MobileMenuTemplate)}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </nav>
    </header>
  )
}