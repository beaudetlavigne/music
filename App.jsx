// App.jsx
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { VideoPlayer } from "./components/VideoPlayer";
import { Footer } from "./components/Footer";
import { IntlProvider } from "react-intl";
import messages_fr from "./locales/fr.json";
import messages_en from "./locales/en.json";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";
import { Bio } from "./components/Bio";

const messages = {
  fr: messages_fr,
  en: messages_en,
};

function App() {
  const [locale, setLocale] = useState("fr");

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="min-h-screen flex flex-col">
        <Navbar locale={locale} setLocale={setLocale} />
        <Hero />
        <Gallery />
        <VideoPlayer />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
