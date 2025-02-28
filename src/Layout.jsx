import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";

export default function Layout({children}) {
  return (
    <main className="font-[Inter]">
        <Navbar />
        <div>
            {children}
        </div>
        <Footer />
    </main>
  )
}
