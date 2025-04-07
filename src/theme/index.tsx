"use client";

import { useState } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { useServerInsertedHTML } from "next/navigation";
import { ToastContainer, Zoom } from "react-toastify";
import theme from "./theme";

export default function ThemeRegistry({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const options = {
    key: "mui-style-rtl",
    stylisPlugins: [prefixer, rtlPlugin]
  };
  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles: string = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-right"
          transition={Zoom}
          autoClose={5000}
          draggable={false}
          rtl
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
        />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}