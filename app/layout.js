import { getFooter } from "@/services/services";
import "../styles/globals.css";
import Footer from "@/components/footer";

const getFooterData = async () => {
  const footerData = (await getFooter()).data;
  return {
    footerData,
  };
};

export default async function RootLayout({ children }) {
  const { footerData } = await getFooterData();
  return (
    <html>
      <body dir="rtl" lang="fa" className="overflow-x-hidden">
        {children}
        <Footer footerData={footerData} />
      </body>
    </html>
  );
}
