import { fetchFooter } from "@/services/services";
import "../styles/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Menu from "@/components/menu/menu";

const getFooterData = async () => {
  const footerData = await fetchFooter();
  return {
    footerData,
  };
};

export default async function RootLayout({ children }) {
  const { footerData } = await getFooterData();
  return (
    <html>
      <body dir="rtl" lang="fa" className="overflow-x-hidden">
        <Navbar />
        <Menu />
        {children}
        <Footer footerData={footerData} />
      </body>
    </html>
  );
}
