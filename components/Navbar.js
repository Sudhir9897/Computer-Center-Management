import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      background:"#111827",
      padding:"15px",
      textAlign:"center"
    }}>
      <Link href="/" style={{color:"white",margin:"0 15px"}}>Home</Link>
      <Link href="/about" style={{color:"white",margin:"0 15px"}}>About</Link>
      <Link href="/courses" style={{color:"white",margin:"0 15px"}}>Courses</Link>
      <Link href="/contact" style={{color:"white",margin:"0 15px"}}>Contact</Link>
    </nav>
  )
}