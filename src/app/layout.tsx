import "@/app/styles/globals.css"
import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/Navbar"
import MountedClient from "./components/MountedClient"
import RegisterModal from "./components/modals/RegisterModal"
import ReduxProvider from "./providers/ReduxProvider"
import LoginModal from "./components/modals/LoginModal"
import ToastProvider from "./providers/ToastProvider"
import getCurrentUser from "./actions/getCurrentUser"
import { User } from "./types/UserProps"

const newFont = Nunito({
  subsets: ["latin"]
})


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user: any= await getCurrentUser();

  return (

    <html lang="en">
      <head>
        <title>Vacation Site</title>
      </head>
      <body className={newFont.className}>
        <ReduxProvider>
          <MountedClient>
            <ToastProvider/>
            <RegisterModal />
            <LoginModal/>
            <Navbar user={user}/>
          </MountedClient>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}

