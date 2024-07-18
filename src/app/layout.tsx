import "@/app/styles/globals.css"
import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/Navbar"
import MountedClient from "./components/MountedClient"
import RegisterModal from "./components/modals/RegisterModal"


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
        <MountedClient>
          {/* <Modal isOpen onSubmit={()=>{}} onClose={()=>{}} btnLabel="Kayıt Ol" title="KAYIT OL" /> */}
          <RegisterModal/>
          <Navbar />
        </MountedClient>
        {children}
      </body>
    </html>
  )
}

export default RootLayout