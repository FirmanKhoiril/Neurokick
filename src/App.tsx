import { Route, Routes } from "react-router-dom";
import { History, Home, Register, SelectedTranscript } from "./pages";
import { useGlobalStore } from "./context/useStore";
import { Navbar, SettingsPopup, Sidebar, ViewSidebar } from "./components";
import { Toaster } from "sonner";

export const App = (): JSX.Element => {
  const { isAuth, dark, openViewSidebar } = useGlobalStore();

  if (!isAuth) return <Register />;

  return (
    <div className={` ${dark ? "dark " : "light "} relative `}>
      <main className="main__container ">
        <Sidebar />
        <SettingsPopup />
        {openViewSidebar && <div className="fixed right-0 top-0 w-full h-screen z-20 bg-black/75" />}
        <ViewSidebar />
        <Toaster richColors position="top-center" theme={dark ? "dark" : "light"} />
        <div className="w-full pl-5 md:pl-8  lg:pl-14 h-full pr-6 md:pr-10  lg:pr-20">
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<History />} path="/current-history" />
            <Route element={<SelectedTranscript />} path="/current-history/:id" />
            <Route element={<Register />} path="/register" />
          </Routes>
        </div>
      </main>
    </div>
  );
};
