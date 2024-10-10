import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="w-full border-t border-gray-400"></div>
      <Header />
      <main className="container mx-auto flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
