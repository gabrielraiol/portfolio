import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { LanguageSelector } from '../components/ui/LanguageSelector';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLanguage } from '../hooks/useLanguage';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { AboutPage } from '../pages/AboutPage';
import { EducationPage } from '../pages/EducationPage';
import { ExperiencePage } from '../pages/ExperiencePage';
import { HomePage } from '../pages/HomePage';

function App() {
  const { content, language, setLanguage } = useLanguage();
  const { page, navigate } = usePageNavigation();
  useDocumentTitle(page, content);

  const pages = {
    home: <HomePage content={content} />,
    about: <AboutPage content={content} />,
    experience: <ExperiencePage content={content} />,
    education: <EducationPage content={content} />,
  };

  return <>
    <Header content={content} onNavigate={navigate} />
    <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
    {pages[page]}
    <Footer content={content} />
  </>;
}

export default App;
