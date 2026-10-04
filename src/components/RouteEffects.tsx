import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, getPageSeo, notFoundSeo } from "@/data/seo";

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Side effects that run on every route change:
 * - scroll to the top of the new page (or to the #hash target)
 * - update <title>, meta description, canonical and Open Graph tags
 */
export function RouteEffects() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  useEffect(() => {
    const page = getPageSeo(pathname);
    const title = page?.title ?? notFoundSeo.title;
    const description = page?.description ?? notFoundSeo.description;

    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="robots"]', "name", "robots", page ? "index, follow" : "noindex");

    if (page) {
      const url = canonicalUrl(page.path);
      setCanonical(url);
      setMeta('meta[property="og:url"]', "property", "og:url", url);
    }
  }, [pathname]);

  return null;
}
