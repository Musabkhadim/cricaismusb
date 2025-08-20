"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { auth, provider, db } from "../app/firebase/config"; // ✅ Use correct path (update according to your folder)
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });

  // ✅ LOGIN with email
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      alert("Login successful!");

      onOpenChange(false);
    } catch (error: any) {
            alert("login failed (try again )");

      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ SIGNUP with email and Firestore save
  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        signupData.email,
        signupData.password
      );

      // ✅ Save to Firestore with UID as document ID
      await setDoc(doc(db, "users", signupData.email), {
        uid: result.user.uid,
        name: signupData.name,
        email: signupData.email,
        createdAt: new Date(),
      });
            alert("signup successful!")

      onOpenChange(false);

    } catch (error: any) {
      alert("login failed" + error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ GOOGLE LOGIN with Firestore save
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
          
        photo: user.photoURL,
        createdAt: new Date(),
      }, { merge: true }); // ✅ Prevent overwrite if already exists
      alert("Google login successful!")

      onOpenChange(false);
    } catch (error: any) {
      // alert("Google login failed: " + error.message);
      
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome to Cricaismus</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* LOGIN TAB */}
          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="text-center">
                <p className="text-gray-500 text-sm my-2">or continue with</p>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={handleGoogleLogin}
                >
                  <img src="/google.png" alt="Google" className="w-6 h-6" />
                  <span>Continue with Google</span>
                </Button>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </TabsContent>

          {/* SIGNUP TAB */}
          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={signupData.name}
                  onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="text-center">
                <p className="text-gray-500 text-sm my-2">or continue with</p>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                  onClick={handleGoogleLogin}
                >
                  <img src="/google.png" alt="Google" className="w-6 h-6" />
                  <span>Continue with Google</span>
                </Button>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
