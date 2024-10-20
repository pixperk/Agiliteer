"use client";
import { DottedSeparator } from "@/components/dotted-separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Loader, LogOut } from "lucide-react";
import { useCurrentUser } from "../api/use-current-user";
import { useLogout } from "../api/use-logout";

export const UserButton = () => {
  const { data: user, isLoading } = useCurrentUser();
  const { mutate: logout } = useLogout();

  if (isLoading) {
    return (
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-200 border border-neutral-300">
        <Loader className="w-4 h-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const { name, email } = user;

  const avatarFallback = name
    ? name.charAt(0).toUpperCase()
    : email.charAt(0).toUpperCase() ?? "U";

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="w-10 h-10 hover:opacity-80 transition-opacity border border-neutral-300 shadow-sm">
          <AvatarFallback className="bg-neutral-200 font-semibold text-neutral-600 flex items-center justify-center">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-64 rounded-lg shadow-lg border border-neutral-200 bg-white dark:bg-neutral-800 dark:border-neutral-700 transition-transform transform-gpu"
        sideOffset={10}
      >
        <div className="flex flex-col items-center justify-center gap-3 px-4 py-5">
          <Avatar className="w-[56px] h-[56px] border border-neutral-300 shadow-md">
            <AvatarFallback className="bg-neutral-200 text-xl font-medium text-neutral-500 flex items-center justify-center">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
              {name || "User"}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {email}
            </p>
          </div>
        </div>

        <DottedSeparator className="my-2" />

        <DropdownMenuItem
          onClick={() => logout()}
          className="h-12 px-4 flex items-center justify-center text-amber-700 hover:bg-red-50 dark:hover:bg-red-900 hover:text-red-700 transition-colors cursor-pointer rounded-b-lg"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
