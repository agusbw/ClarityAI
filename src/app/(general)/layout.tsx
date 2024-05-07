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
      <main className="lg:pt-16 lg:px-52 px-5 pt-8 min-h-[calc(100vh-111.2px)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
