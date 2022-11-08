import { classNames } from "shared/lib/UtilityMethods"
import { AppLink } from "shared/ui/AppLink/AppLink"
// styles
import classes from "./Navbar.module.scss"

interface NavbarProps {
   className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
   return (
      <div className={classNames(classes.navbar, {}, [className] )}>
         <div>
            logo 
         </div>
         <div className={classNames(classes.links)}>
            <AppLink className={classNames(classes.link)} to='/'>home</AppLink>
            <AppLink className={classNames(classes.link)} to='/contact'>contact</AppLink>
            <AppLink className={classNames(classes.link)} to='/board'>board</AppLink>
         </div>
      </div>
   )
}