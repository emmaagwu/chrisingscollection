import Marquee from "../components/client/marquee";
import Navbar from "../components/client/navbar";



export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <Navbar />
        <Marquee
          text="We offer 25% discount during the Black Friday Sales. Dont! Miss it..."
          speed="normal"
        />
        {children}
      </div>
  );
}