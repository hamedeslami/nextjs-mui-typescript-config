"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/config/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const ReactQueryProvider = ({ children }: { children: ReactNode }) => {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;