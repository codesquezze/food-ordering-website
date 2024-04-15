import SectionHeaders from "@/components/layout/SectionHeaders";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About us'} />
        <div className="text-gray-400 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Welcome to St. Pizza, where passion meets flavor! Established with a dedication to crafting the perfect pizza experience, our artisanal pies are made with fresh ingredients and baked to perfection.
          </p>

          <p>
          Whether you're craving classic Margherita or bold BBQ Chicken, each bite is a taste of quality and tradition.
          </p>

          <p>
          Join us and savor the essence of great pizza at St. Pizza!
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Dont Hesitate'}
          mainHeader={'Contact us'} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel: +919998768678">+919998768678</a>
        </div>
      </section>
    </>
  );
}
