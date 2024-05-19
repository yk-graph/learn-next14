import SideMenu from "@/components/SideMenu/SideMenu";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <main className="flex-1 overflow-auto bg-gray-100">{children}</main>
    </div>
  );
}
