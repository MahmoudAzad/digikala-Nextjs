import "../styles/globals.css";
import { fetching } from "@/services/services";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Menu from "@/components/menu/megaMenu";
import { ReduxProvider } from "@/redux/provider";

const getFooterData = async () => {
  const footerData = await fetching("/footer");
  return {
    footerData,
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { footerData } = await getFooterData();

  return (
    <ReduxProvider>
      <html>
        <body dir="rtl" lang="fa" className="overflow-x-hidden">
          <Navbar />
          <Menu />
          {children}
          <Footer footerData={footerData} />
        </body>
      </html>
    </ReduxProvider>
  );
}
