import { useState, useCallback, useEffect } from 'react';
import { Nav, Footer, ToTop } from './components/chrome';
import Collections from './pages/Collections';
import Craftsmanship from './pages/Craftsmanship';
import Story from './pages/Story';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import { CollectionDetail, ProductDetail, Lookbook } from './pages/Detail';
import type { PageKey } from './data';

const PAGES: Record<PageKey, React.ComponentType<{ go: Go }>> = {
  collections: Collections,
  craftsmanship: Craftsmanship,
  story: Story,
  sustainability: Sustainability,
  contact: Contact,
};

export type Go = (page: string, param?: string) => void;
type Route = { page: string; param?: string };

// hash 路由：#/collections、#/collections/fashion、#/product/turtleneck、#/lookbook
const getHashRoute = (): Route => {
  const seg = window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (seg[0] === 'product' && seg[1]) return { page: 'product', param: seg[1] };
  if (seg[0] === 'lookbook') return { page: 'lookbook' };
  if (seg[0] === 'collections' && seg[1]) return { page: 'collections', param: seg[1] };
  if (seg[0] && seg[0] in PAGES) return { page: seg[0] };
  return { page: 'collections' };
};

export default function App() {
  const [route, setRoute] = useState<Route>(getHashRoute);
  const [fade, setFade] = useState(true);

  const go = useCallback<Go>((p, param) => {
    setFade(false);
    setTimeout(() => {
      setRoute({ page: p, param });
      window.location.hash = param ? `/${p}/${param}` : `/${p}`;
      window.scrollTo(0, 0);
      setFade(true);
    }, 260);
  }, []);

  useEffect(() => {
    const onHash = () => setRoute(getHashRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  let content: React.ReactNode;
  if (route.page === 'product' && route.param) content = <ProductDetail id={route.param} go={go} />;
  else if (route.page === 'lookbook') content = <Lookbook go={go} />;
  else if (route.page === 'collections' && route.param) content = <CollectionDetail id={route.param} go={go} />;
  else {
    const Page = PAGES[(route.page as PageKey) in PAGES ? (route.page as PageKey) : 'collections'];
    content = <Page go={go} />;
  }

  return (
    <div className="min-h-screen">
      <Nav page={(route.page in PAGES ? route.page : 'collections') as PageKey} go={go} />
      <main className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        {content}
      </main>
      <Footer go={go} />
      <ToTop />
    </div>
  );
}
