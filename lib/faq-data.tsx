import type React from "react"
export interface FAQItem {
  question: string
  answer: React.ReactNode
}

export interface FAQCategory {
  title?: string
  items: FAQItem[]
}

export const faqData: FAQCategory[] = [
  {
    items: [
      {
        question: "Where is your office?",
        answer: (
          <>
            <p className="mb-2">
              Our Aba office is located at: 109 Jubilee Road By Mosque, Aba, Abia State
            </p>
            <p>
              Our Aba office is located at: 19A Alake Street, directly opposite the Aba South Local Government
              Secretariat, Ake, Aba.
            </p>
          </>
        ),
      },
      {
        question: "How do you cater for my measurements since I am far away?",
        answer: (
          <>
            <p>We have several options for remote clients:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>You can send us your measurements using our measurement guide (available on request)</li>
              <li>You can send us a well-fitting garment that we can use as a reference</li>
              <li>We can arrange a video call where our tailor will guide you through taking accurate measurements</li>
            </ul>
          </>
        ),
      },
      {
        question: "Can you come and measure me at my office?",
        answer: (
          <p>
            Yes, we offer a premium service where our tailors can visit clients within Lagos and Aba for
            measurements. This service is available by appointment and may incur an additional fee depending on your
            location.
          </p>
        ),
      },
      {
        question: "What if I&apos;m in Abuja or in the North, Can you come?",
        answer: (
          <p>
            For clients in Abuja or other northern states, we currently don&apos;t offer in-person measurement services.
            However, we have a detailed measurement guide and can arrange video calls to ensure accurate measurements.
            We&apos;ve successfully served many clients from these regions using our remote measurement process.
          </p>
        ),
      },
      {
        question: "Can you send clothes Abroad?",
        answer: (
          <p>
            Yes, we ship internationally. We use reliable courier services to ensure your garments reach you safely and
            promptly. International shipping costs will be calculated based on the destination country and the weight of
            the package.
          </p>
        ),
      },
      {
        question: "How much is your Senator?",
        answer: (
          <>
            <p>Our Senator prices vary depending on the style, fabric, and level of detailing:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Basic Senator: ₦25,000 - ₦35,000</li>
              <li>Premium Senator: ₦40,000 - ₦60,000</li>
              <li>Luxury Senator with detailed embroidery: ₦65,000 - ₦100,000+</li>
            </ul>
            <p className="mt-2">Please contact us for a specific quote based on your requirements.</p>
          </>
        ),
      },
      {
        question: "How much is your Agbada?",
        answer: (
          <>
            <p>Our Agbada sets (three pieces) are priced based on style, fabric quality, and embroidery complexity:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Standard Agbada: ₦45,000 - ₦65,000</li>
              <li>Premium Agbada: ₦70,000 - ₦100,000</li>
              <li>Luxury Agbada with extensive embroidery: ₦110,000 - ₦200,000+</li>
            </ul>
            <p className="mt-2">Each Agbada is custom-made to your specifications and measurements.</p>
          </>
        ),
      },
      {
        question: "Do you accept fabrics?",
        answer: (
          <p>
            Yes, we welcome clients who wish to provide their own fabrics. Our skilled tailors can work with a wide
            range of materials to create your desired garment. This option often reduces the overall cost of your order.
          </p>
        ),
      },
      {
        question: "What&apos;s the price if I bring fabric for Senator?",
        answer: (
          <p>
            When you provide your own fabric for a Senator, our service charges typically range from ₦15,000 to ₦40,000,
            depending on the style complexity, embroidery details, and finishing requirements. We&apos;ll provide a specific
            quote after discussing your design preferences.
          </p>
        ),
      },
      {
        question: "What if I bring Fabric for Agbada?",
        answer: (
          <p>
            For client-provided fabrics for Agbada sets, our tailoring service fees range from ₦25,000 to ₦70,000, based
            on the design complexity, embroidery work, and finishing details. The final price will be determined after a
            consultation about your specific design requirements.
          </p>
        ),
      },
      {
        question: "Do I have to pay all at once before you start work?",
        answer: (
          <>
            <p>
              We require a 50% deposit to commence work on your order. This initial payment covers material costs and
              secures your place in our production schedule. The remaining balance is due before delivery or shipping of
              the completed garment.
            </p>
            <p className="mt-2">For orders above ₦100,000, we can arrange a flexible payment plan upon request.</p>
          </>
        ),
      },
      {
        question: "How soon can an order be ready after we seal a deal?",
        answer: (
          <>
            <p>Our standard production timeline is:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Simple Senator: 7-10 working days</li>
              <li>Detailed Senator: 10-14 working days</li>
              <li>Standard Agbada: 10-14 working days</li>
              <li>Premium Agbada with extensive embroidery: 14-21 working days</li>
            </ul>
            <p className="mt-2">
              Rush orders may be accommodated for an additional fee, subject to our current workload.
            </p>
          </>
        ),
      },
    ],
  },
]
