import { useEffect } from 'react';
import { pageTitleKey } from '../constants/navigation';
import type { Translation } from '../types/content';
import type { PageId } from '../types/navigation';

export function useDocumentTitle(page: PageId, content: Translation) {
  useEffect(() => {
    document.title = page === 'home' ? 'Gabriel Raiol | Portfolio' : content[pageTitleKey[page]];
  }, [content, page]);
}
