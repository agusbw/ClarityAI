import Header from "./_components/header";
import Footer from "./_components/footer";

export default function SummarizeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-rows-[auto_1fr_auto] px-4 pt-4 md:h-screen md:max-h-screen md:px-4 md:pt-5 lg:px-16 lg:pt-12 xl:px-44">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
