import Footer from "./Footer";
import Header from "./Header";
// Define LayoutProps interface directly here
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Added pt-16 to offset the fixed header's height */}
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
