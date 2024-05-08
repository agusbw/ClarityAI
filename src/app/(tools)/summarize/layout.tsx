import Header from "./_components/header";
import Footer from "./_components/footer";

export default function SummarizeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-4 md:h-screen md:max-h-screen md:overflow-hidden md:p-5 lg:px-16 lg:pt-20 xl:px-44">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
