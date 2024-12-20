import type { Metadata } from "next";
import AppProvider from "src/shared/providers/AppProvider";
import { baseMetadata } from "src/shared/utils/metadata";
import "src/shared/styles/global.css";
import { Inter } from "next/font/google";
import Alert from "src/shared/ui/alert";
import { AppSidebar } from "src/app/_components/app-sidebar";
import { Header } from "src/app/_components/header";
import { Container } from "src/app/_components/container";

const font = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Alert />
        <AppProvider>
          <AppSidebar />
          <Container>
            <Header />
            {children}
          </Container>
        </AppProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = baseMetadata;
