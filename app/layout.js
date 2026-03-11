import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        <header style={{ background: "#1e40af", color: "white", padding: "20px", textAlign: "center" }}>
          <h1>Dhaarna Computer Education Center</h1>
          <p>Learn Computers. Build Your Future.</p>
        </header>

        <Navbar />

        <main style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}