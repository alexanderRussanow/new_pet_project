import React from "react"
import { LinkProps, Link } from "react-router-dom"
import { classNames } from "shared/lib/UtilityMethods"
// styles
import classes from "./AppLink.module.scss"

export enum AppLinkTheme {
   PRIMARY = "primary",
   SECONDARY = "secondary",
}
const { PRIMARY } = AppLinkTheme

interface AppLinkProps extends LinkProps {
   className?: string
   theme?: AppLinkTheme
}

export const AppLink: React.FC<AppLinkProps> = ({ children, className, to, theme = PRIMARY,  ...props }) => {
   return (
      <Link
         to={to}
         className={classNames(classes.appLink, {}, [className, classes[theme]])}
         {...props}
      >
         {children}
      </Link>
   )
}