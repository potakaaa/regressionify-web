"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = ({ path = "/" }: { path?: string }) => {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      className="cursor-pointer hover:bg-neutral-100"
      onClick={() => router.push(path)}
    >
      <ArrowLeft className="size-5 lg:size-6" />
    </Button>
  );
};

export default BackButton;
