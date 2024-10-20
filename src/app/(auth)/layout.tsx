"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {

  const pathname = usePathname()
  return (
    <main className="bg-neutral-100 min-h-screen">
      
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
            <Image src="/logo.svg" height={152} width={156} alt="logo" />
            
            <Button asChild variant={"secondary"}>
              <Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
            {pathname === "/sign-in" ? "Sign Up" : "Login"}
            </Link>
            </Button>
           
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
      {children}
      </div>
      </div>
      
    </main>
  );
};

export default layout;
