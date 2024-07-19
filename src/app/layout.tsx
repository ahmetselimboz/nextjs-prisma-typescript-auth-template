import "@/app/styles/globals.css"
import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/Navbar"
import MountedClient from "./components/MountedClient"
import RegisterModal from "./components/modals/RegisterModal"
import ReduxProvider from "./providers/ReduxProvider"
import LoginModal from "./components/modals/LoginModal"


const newFont = Nunito({
  subsets: ["latin"]
})


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (

    <html lang="en">
      <head>
        <title>Vacation Site</title>
      </head>
      <body className={newFont.className}>
        <ReduxProvider>
          <MountedClient>
            <RegisterModal />
            <LoginModal/>
            <Navbar />
          </MountedClient>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}

export default RootLayout