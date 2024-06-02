import { BrowserRouter, Link, useLocation, useRoutes } from "react-router-dom";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ThemeSwitch";
import { Card } from "./components/ui/card";
import { File, Home, LogOut, Settings as SettingsIcon } from "lucide-react";
import { cn } from "./lib/utils";
// import { Data } from "./lib/Data";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Settings from "./pages/Settings";
import { HeaderMenu } from "./components/HeaderMenu";

function App() {
  return (
    <BrowserRouter>
      <main className="relative bg-background min-h-screen">
        <Layout>
          <AppRouter />
        </Layout>
      </main>
    </BrowserRouter>
  );
}

const AppRouter = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [],
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ]);

  return elements;
};

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <>
      <div className="w-full flex">
        <nav
          className={cn(
            "hidden md:block sticky top-0 left-0 h-screen text-white bg-background"
          )}
        >
          <Card className="flex items-center gap-2 justify-center p-2 m-2 border-none border-primary-foreground/30">
            <span className="font-bold border-[1px] p-2">LOGO</span>
          </Card>
          {[
            { label: "Home", icon: Home, href: "/" },
            { label: "Create", icon: File, href: "/create" },
            { label: "Settings", icon: SettingsIcon, href: "/settings" },
            { label: "Logout", icon: LogOut, href: "#" },
          ].map((item, index) => {
            return (
              <Link
                key={index}
                className="flex gap-2 items-center"
                to={item.href}
              >
                <Button
                  variant={"ghost"}
                  className={cn(
                    "flex text-foreground justify-start min-w-[180px] items-center gap-2 p-2 m-2 border-none border-primary-foreground/30",
                    {
                      "bg-primary border-[1px] shadow-md":
                        item.href == location.pathname,
                    }
                  )}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-col w-full">
          <header className="sticky z-50 top-0 flex items-center gap-4 px-4 py-2 bg-primary w-full ">
            <span className="text-white font-semibold text-lg text-foreground">
              DASHBOARD
            </span>
            <HeaderMenu />
            <ModeToggle className="ml-auto" />
          </header>
          {children}
        </div>
      </div>
    </>
  );
}

export default App;
