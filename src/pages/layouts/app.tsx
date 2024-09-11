import { MainNavigation } from "@/components/main-navigation";
import ProfileSwitcher from "@/components/profile-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <header className="border-b">
        <div className="flex h-16 items-center gap-6 px-6">
          <ProfileSwitcher />

          <MainNavigation />

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </main>
    </div>
  );
}
