import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { WorkspaceModal } from "@/features/workspaces/components/workspace-modal";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <WorkspaceModal/>
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="lg:pl-[264px] w-full h-full">
          <div className="mx-auto max-w-screen-2xl h-full">
            <Navbar />
            <main className="h-full py-8 px-6 flex flex-col">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
