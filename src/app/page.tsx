import AchievementsSection from "@/components/achievementsSection/achievementsSection";
import styles from "./home.module.css";
import Header from "@/components/header/header";
import HeroSection from "@/components/heroSection/heroSection";
import TrustedSection from "@/components/trustedSection/trustedSection";
import Trophy from "@/icons/trophy";
import UserGroup from "@/icons/userGroup";
import Desktop from "@/icons/desktop";
import AwardsSection from "@/components/awardsSection/awardsSection";
import SpecialisationSection from "@/components/specialisationSection/specialisationSection";
import WorkSection from "@/components/workSection/workSection";
import ServiceSection from "@/components/serviceSection/serviceSection";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <HeroSection />
      <TrustedSection
        heading="trusted by leading brands and companies like"
        brands={[
          "/trustedBrands/brand1.png",
          "/trustedBrands/brand3.png",
          "/trustedBrands/brand4.png",
          "/trustedBrands/brand6.png",
          "/trustedBrands/brand7.png",
          "/trustedBrands/brand8.png",
        ]}
      />
      <AchievementsSection
        items={[
          {
            name: "Projects Delivered",
            quantity: "108+",
            startIcon: <Trophy />,
          },
          {
            name: "Client Retention Rate",
            quantity: "99%",
            startIcon: <UserGroup />,
          },
          {
            name: "Technology Experience",
            quantity: "34+",
            startIcon: <Desktop />,
          },
        ]}
      />
      <AwardsSection
        awards={[
          "/awards/award1.png",
          "/awards/award2.png",
          "/awards/award3.png",
          "/awards/award4.png",
          "/awards/award5.png",
          "/awards/award6.png",
        ]}
      />
      <SpecialisationSection
        introText="INDUSTRIES"
        heading="Industries We Specialise In."
        description="Explore our comprehensive suite of solutions catering to your needs. From software development to digital transformation, we&apos;re here to drive your success."
        specialisations={[
          {
            imageSrc: "https://creuto.com/img/industries/health.webp",
            name: "Healthcare",
          },
          {
            imageSrc: "https://creuto.com/img/industries/fitness.webp",
            name: "Fitness",
          },
          {
            imageSrc: "https://creuto.com/img/industries/ecommerce.webp",
            name: "E-commerce & Retail",
          },
          {
            imageSrc: "https://creuto.com/img/industries/social-media.webp",
            name: "Education",
          },
        ]}
      />
      <WorkSection
        introText="HOW WE WORK"
        heading="Why is Creuto your Top Choice?"
        description="At Creuto, we specialize in developing customized software solutions to fit your unique needs, backed by industry expertise and a commitment to excellence."
        works={[
          {
            heading: "Determine",
            description:
              "The process commences with an introductory call to determine the nitty-gritty of your project, budget considerations, and current industry landscape.",
          },
          {
            heading: "In-Depth Exploration",
            description:
              "After engaging in a detailed conversation to thoroughly comprehend your needs, we do an in-depth exploration of the market segment which involves competitor analysis, understanding the key deliverables & emphasising the USP of your project.",
          },
          {
            heading: "In-Depth Exploration",
            description:
              "After engaging in a detailed conversation to thoroughly comprehend your needs, we do an in-depth exploration of the market segment which involves competitor analysis, understanding the key deliverables & emphasising the USP of your project.",
          },
        ]}
      />
      <ServiceSection
        services={[
          "Design",
          "Custom Software",
          "Artificial Intelligence",
          "App Developement",
        ]}
      />
      <Footer
        company="Creuto"
        description="We don&apos;t just aim to fit in - we strive to stand out. Experience the perfect blend of innovation, excellence, and trust that makes us truly unforgettable. Discover the difference with Creuto."
        services={[
          "Custom Software Development",
          "Web App Development",
          "UI/UX Design",
          "Mobile App development",
          "Devops & Cloud",
          "QA & Automation",
          "Data Engineering & BI",
          "API Development & integration",
        ]}
        locations={[
          {
            city: "Bhubaneswar | HQ",
            address: "Plot No 293, District Center, Bhubaneswar, Odisha 751016",
          },
          {
            city: "Delhi",
            address:
              "2TF, Satyam Complex 2, Alpha-II, Greater Noida, Uttar Pradesh",
          },
          {
            city: "Bangalore",
            address:
              "P- 829, 7th Cross, 11th Main Rd, ITI Layout, Bengaluru, 560068",
          },
          {
            city: "Australia",
            address: "Level 4, 11 York Street, Sydney, NSW-2000",
          },
        ]}
        contacts={["+91 760 884 4995", "+91 982 737 7339"]}
        socials={{
          instagram: "https://www.instagram.com/",
          facebook: "https://www.facebook.com/",
          linkedIn: "https://www.linkedIn.com/",
          twitter: "https://www.twitter.com/",
        }}
      />
    </div>
  );
}
