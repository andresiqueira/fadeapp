import { forwardRef, LegacyRef } from "react"
import Link from 'next/link'

interface myLinkProps {
  href: string
  children: string
  className: string
}

const MyLink = (props: myLinkProps, ref: LegacyRef<HTMLAnchorElement> | undefined) => {
  const { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
}

export const NextLink = forwardRef(MyLink)