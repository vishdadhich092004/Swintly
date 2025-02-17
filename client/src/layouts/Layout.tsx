import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screeen flex flex-col">
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
