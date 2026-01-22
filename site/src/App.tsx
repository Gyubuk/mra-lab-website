import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ResearchSection } from './components/ResearchSection';
import { MembersSection } from './components/MembersSection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const heroImage = "https://ssu.ac.kr/wp-content/uploads/2025/09/news_05_2509.jpg";

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection backgroundImage={heroImage} />
        <ResearchSection />
        <MembersSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}