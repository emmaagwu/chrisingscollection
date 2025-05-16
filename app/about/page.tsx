import Navbar from "@/app/components/client/navbar"
import Marquee from "@/app/components/client/marquee"
import { Footer } from "@/app/components/client/footer"
import HeroBanner from "@/app/components/client/about/hero-banner"
import ContentSection from "@/app/components/client/about/content-section"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Marquee
        text="FREE SHIPPING ON ALL ORDERS OVER $150 • NEW COLLECTION AVAILABLE NOW • USE CODE 'GRANDEUR10' FOR 10% OFF"
        speed="normal"
      />

      <main>
        {/* Hero Banner */}
        <HeroBanner
          title="About Us"
          description="Founded in 2017 and based in Aba, Nigeria, Chrisings Collections is a custom tailor shop with a strong commitment and dedication to excellence."
          bgColor="#683D0D"
        />

        {/* Mission Statement */}
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-20">
        <p className="text-lg text-gray-700 md:text-xl">
          We believe there is nothing better than a tailor-made outfit, and our mission is to give that to everyone
          who wants it. We&rsquo;ve been crafting native wears for Nigerian men for over 10 years.
        </p>
        </div>

        {/* Content Sections */}
        <ContentSection
          title="OUR IDEAL CLIENTS ARE MEN WHO REALLY CARE ABOUT WEARING QUALITY."
          description="We cater for native wears that makes everyone feel confident, by choosing designs and styles that fit them. We strive to meet the personal needs of every client, ensuring satisfaction with every piece we create."
          imageUrl="https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161"
          imageAlt="Man wearing purple native wear"
        />

        <ContentSection
          title="AFFORDABLE AND DURABLE HIGH QUALITY PRODUCTS."
          description="We deliver high-quality products that are affordable, yet made of durable materials. With our custom-made clothing, our clients will be able to find their desired fabrics, colours, and styles. We personally hand-stitch every article of clothing and focus on providing a high level of customer service, which leads to customer satisfaction."
          imageUrl="https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161"
          imageAlt="Close-up of fabric details"
          reversed={true}
        />

        <ContentSection
          title="VARIETIES OF STYLES THAT BOOST YOUR CONFIDENCE."
          description="And we have a good number of style options available, making it easy for clients to pick their choices or specify any modifications they want. We are eager to answer any questions you may have over the phone or via WhatsApp. We look forward to working with you to provide high-quality men's clothing that will deliver self-confidence and help you look your very best."
          imageUrl="https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161"
          imageAlt="Man wearing blue traditional attire"
        />
      </main>

      <Footer />
    </>
  )
}
