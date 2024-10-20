import { UserButton } from "@/features/auth/components/user-button";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
        <div className="mx-auto max-w-screen-2xl p-4">
            <nav className="flex justify-between items-center h-[73px]"> 
                <Link href = "/">
                <Image src={"/logo.svg"} alt="logo" height={56} width={132}/>
                </Link>
                <UserButton/>
            </nav>
      <div className="flex flex-col items-center justify-center py-4">
        {children}
        </div>
        </div>
    </main>
  );
};

export default Layout;
