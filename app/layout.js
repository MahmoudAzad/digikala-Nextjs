import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body dir="rtl" lang="fa" className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
