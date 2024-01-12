import MainSection from "./ui/web/home/main"
import SuccessStories from "./ui/web/home/successStories"
import Equipments from "./ui/web/home/equipments"
import AboutSection from "./ui/web/home/about"
import ContactSection from "./ui/web/home/contactSection"

export default function Home() {
  return (
    <div className="w-full h-full">
      <MainSection />
      <SuccessStories />
      <Equipments />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
