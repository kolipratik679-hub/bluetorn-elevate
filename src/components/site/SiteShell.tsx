import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CursorNetwork } from "@/components/site/CursorNetwork";
import { LoadingScreen } from "@/components/site/Sections";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <LoadingScreen />
      <CursorNetwork />
      <Navbar />
      <main key={pathname} className="flex-1 animate-[fade-in_0.6s_cubic-bezier(0.16,1,0.3,1)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
