import Header from "./_components/header";
import Footer from "./_components/footer";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-133px)] pt-8 lg:pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
