"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { loginSchema } from "../schemas";
import { useLogin } from "../api/use-login";




export const SignInCard = () => {
 const {mutate, isPending} = useLogin()
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  
  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate({json : values})
  };

  return (
    <Card className="w-full h-full md:w-[486px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center p-7">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Input Field */}
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="Enter email address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Input Field */}
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter password"
                      minLength={8} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button disabled={isPending} size={"lg"} className="w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
        <CardContent className="p-7 flex flex-col gap-y-4">
          {/* Google Login Button */}
          <Button variant={"secondary"} size={"lg"} className="w-full" disabled={isPending}>
            <FcGoogle className="mr-2 size-5" />
            Login with Google
          </Button>

          {/* GitHub Login Button */}
          <Button variant={"secondary"} size={"lg"} className="w-full" disabled={isPending}>
            <FaGithub className="mr-2 size-5" />
            Login with GitHub
          </Button>
        </CardContent>
      </div>
      <div className="px-7">
        <DottedSeparator/>
      </div>
      <CardContent className="p-7 flex items-center justify-center">
              <p>
                 New to Agiliteer?
                <Link href={"/sign-up"}>
               <span className="text-blue-600">&nbsp;Sign Up</span>
                </Link>
              </p>
      </CardContent>
    </Card>
  );
};
