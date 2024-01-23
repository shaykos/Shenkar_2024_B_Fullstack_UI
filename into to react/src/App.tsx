import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./components/Store";
import { HeaderLinks } from "./types/HeaderTypes";

export default function App() {

  let links: Array<HeaderLinks> = [
    { url: 'https://bard.google.com', text: 'Bard' },
    { url: 'https://copilot.microsoft.com', text: 'Copilot' },
    { url: 'https://phind.com', text: 'Phind' },
    { url: "https://pi.ai", text: "PI" }
  ];

  return (
    <>
      <Header links={links} />
      <Store />
      <Footer />
    </>
  )
}