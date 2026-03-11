import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./globals.css"

export default function RootLayout({children}){
  return(
    <html>
      <body>

        <header style={{
          background:"#1e40af",
          color:"white",
          textAlign:"center",
          padding:"25px"
        }}>
          <h1>Dhaarna Computer Education Center</h1>
          <p>Learn Computers. Build Your Future.</p>
        </header>

        <Navbar/>

        <main style={{
          maxWidth:"1100px",
          margin:"auto",
          padding:"30px"
        }}>
          {children}
        </main>

        <Footer/>

      </body>
    </html>
  )
}