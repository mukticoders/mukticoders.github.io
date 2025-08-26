import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
