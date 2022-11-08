import { BoardPage } from "pages/Board"
import { ContactPage } from "pages/Contact"
import { HomePage } from "pages/Home"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
   HOME = 'home',
   CONTACT = 'contact',
   BOARD = 'board',
}

export const RoutesPath: Record<AppRoutes, string> = {
   [AppRoutes.HOME]: '/',
   [AppRoutes.CONTACT]: '/contact',
   [AppRoutes.BOARD]: '/board',
}

export const routesConfig: Record<AppRoutes, RouteProps> = {
   [AppRoutes.HOME]: {
      path: RoutesPath[AppRoutes.HOME],
      element: <HomePage />,
   },
   [AppRoutes.CONTACT]: {
      path: RoutesPath[AppRoutes.CONTACT],
      element: <ContactPage />,
   },
   [AppRoutes.BOARD]: {
      path: RoutesPath[AppRoutes.BOARD],
      element: <BoardPage />,
   },
}