import { useEffect, useState } from "react"
import { HeaderStylesProps } from "components/Header"

export const useTrackingScrolling =(styles: HeaderStylesProps) => {
  const [scrollStyles, setScrollStyles] = useState(styles)

  const handleScroll = async () => {
    if (window.scrollY > 32) {
      await setScrollStyles({
        menu: "lg:py-3 lg:bg-secondary",
        logo: "lg:w-44 lg:h-9" 
      })
    } else {
      await setScrollStyles({
        menu: "lg:py-8 lg:bg-transparent",
        logo: "lg:w-56 lg:h-12"
      })
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
  }, [])

  return scrollStyles
}