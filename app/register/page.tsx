"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  email: z.email("Invalid email address"),
});

export default function HomePage() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function handleLogin(data: z.infer<typeof loginSchema>) {
    console.log("Login data:", data);
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollSmoother);
      
      ScrollSmoother.get()?.kill();

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.4,
        effects: true,

      });
    }
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-black">
          <div className="w-96 mb-3">
            <a className="font-bold text-lg items-center flex gap-2 self-center " href="/">
            <div className="hover:fill-amber-300">
              <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>Back to Home</title><polyline points="244 400 100 256 244 112" style={{fill:"none",stroke:"#000000",strokeLinecap:"square",strokeMiterlimit:10,strokeWidth:48}}/><line x1="120" y1="256" x2="412" y2="256" style={{fill:"none",stroke:"#000000",strokeLinecap:"square",strokeMiterlimit:10,strokeWidth:48}}/></svg>
            </div>
            <p>
              Back
            </p>
            </a>
          </div>
          <div className="backdrop-blur-md bg-white/30 border border-white/50 shadow-xl rounded-2xl p-8 w-96">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Register</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/50 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent rounded-lg text-gray-800 placeholder-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        className="bg-white/50 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent rounded-lg text-gray-800 placeholder-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="bg-white/50 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent rounded-lg text-gray-800 placeholder-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2 transition-colors duration-200"
              >
                Login
              </Button>
            </form>
          </Form>
        </div>

        </section>
      </div>
    </div>
  );
}
