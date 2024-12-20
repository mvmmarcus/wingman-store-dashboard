import { ExampleProvider } from "src/shared/providers/ExampleProvider";
import { ThemeProvider } from "src/shared/providers/ThemeProvider";
import { SidebarProvider } from "src/shared/ui/sidebar";

type AppProviderProps = {
  children: React.ReactNode;
};

export default async function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SidebarProvider>
        <ExampleProvider>{children}</ExampleProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
