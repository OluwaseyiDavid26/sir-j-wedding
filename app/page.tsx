import Hero from "../components/sections/Hero";
import Program from "../components/sections/Program";
import Hymns from "../components/sections/Hymns";
import Ministers from "../components/sections/Ministers";
import PhotoGroup from "../components/sections/PhotoGroup";
import Gallery from "../components/sections/Gallery";
import ReceptionProgram from "../components/sections/receptionProgram";
import Direction from "../components/sections/Direction";
import RSVP from "../components/sections/RSVP";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      <Program />
      <Hymns />
      <Ministers />
      <PhotoGroup />
      <Gallery />
      <ReceptionProgram />
      <Direction />
      <RSVP />
    </main>
  );
}
