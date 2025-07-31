
import "./globals.css";


import Header from './Header';
import Footer from './Footer';
// app/layout.jsx
export const metadata = {
  title: "Wellcome To Raja Tayyab PortFolio", 
  description: "Welcome to my PortFolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
