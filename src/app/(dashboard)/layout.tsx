import { requireAuth } from "@/lib/auth-utils";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Providers } from "@/components/providers";

export const metadata = {
  title: "Control | Artemis",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireAuth();

  return (
    <Providers>
      <div className="min-h-screen bg-graphite-50">
        <Sidebar
          user={{
            id: user.id ?? undefined,
            name: user.name,
            email: user.email,
          }}
        />

        {/* Main content area offset by sidebar width */}
        <main className="lg:ml-64 min-h-screen">
          <div className="p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </Providers>
  );
}
