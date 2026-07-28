import { useEffect, useState } from 'react';
import { pageByPath } from '../constants/navigation';
import type { PageId } from '../types/navigation';

const getCurrentPage = (): PageId => pageByPath[window.location.pathname] ?? 'home';

export function usePageNavigation() {
  const [page, setPage] = useState<PageId>(getCurrentPage);

  useEffect(() => {
    const handlePopState = () => setPage(getCurrentPage());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setPage(pageByPath[path] ?? 'home');
  };

  return { navigate, page };
}
