export const dynamic = "auto";
import "../styles/globals.css";
import { fetching } from "@/services/services";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Menu from "@/components/menu/megaMenu";

const getFooterData = async () => {
  const footerData = await fetching("/footer");
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
