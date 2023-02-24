import Footer from "./Footer";
import Navbar from "./Navbar";

//Nests all pages in between a Navbar and Footer

const Layout = ({children}) => {
    return ( 
        <div className = "content">

            <Navbar />
            {children}
            <Footer />

        </div>
     );
}
 
export default Layout
;