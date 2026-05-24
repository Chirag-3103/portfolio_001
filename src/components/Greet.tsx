"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";

export function Greet() {
  const [name, setName] = useState("");
  const [typing, setTyping] = useState(false);
  const [greeting, setGreeting] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!typing) return;
    const full = `Hello, ${name.trim() || "friend"}!`;
    let i = 0;
    setGreeting("");
    const id = setInterval(() => {
      setGreeting((g) => g + full[i]);
      i++;
      if (i >= full.length) {
        clearInterval(id);
        setTyping(false);
      }
    }, 50);
    return () => clearInterval(id);
  }, [typing, name]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-[#3B82F6] hover:text-white transition-colors">WRITE YOUR NAME</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Say hello</DialogTitle>
          <DialogDescription>Enter your name and watch a friendly greeting animate.</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <label className="sr-only" htmlFor="greet-name">
            Your name
          </label>
          <input
            id="greet-name"
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border px-3 py-2 bg-transparent"
            placeholder="Type your name"
            onKeyDown={(e) => {
              if (e.key === "Enter") setTyping(true);
            }}
          />
        </div>

        <div className="mt-4 min-h-[48px] flex items-center">
          <pre className="w-full rounded-md bg-black/50 p-3 text-sm">{greeting}</pre>
        </div>

        <DialogFooter>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setTyping(true);
                // focus blur to hide mobile keyboard
                inputRef.current?.blur();
              }}
              className="inline-flex items-center justify-center rounded-md bg-[#3B82F6] px-4 py-2 text-sm font-medium text-white hover:brightness-105"
            >
              Run
            </button>
            <DialogClose asChild>
              <button className="inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm">
                Close
              </button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
