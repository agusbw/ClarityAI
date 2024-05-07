import NavBar from "./_components/navbar";
import Footer from "./_components/footer";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className="min-h-[calc(100vh-133px)] pt-8 lg:pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
