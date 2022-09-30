import Footer from "./partials/Footer";
import Navabar from "./partials/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navabar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
