export function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="bg-background flex h-screen min-h-screen flex-col overflow-auto">
      {children}
    </main>
  );
}
