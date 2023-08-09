import Header from "./Header";
import Footer from "./Footer";
import Index from "../pages/Index";

function MainLoyout() {
  return (
    <div className="flex flex-col space-y-2 bg-slate-100">
      <Header />
      <Index />
      <Footer />
    </div>
  )
}
export default MainLoyout;
