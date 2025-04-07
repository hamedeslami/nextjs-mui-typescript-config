"use client"

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof AppRouterCacheProvider>) {
  return <AppRouterCacheProvider {...props}>{children}</AppRouterCacheProvider>
}