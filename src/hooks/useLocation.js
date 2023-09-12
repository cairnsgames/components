import { useState, useEffect } from "react";

export const loadURLDetails = (valid) => {
  let hash = window.location.hash;
  hash = hash.split("?")[0].replace("#", "");

  const myURL = new URL(window.location.href);
  if (window.location.hash) {
    myURL.search = window.location.hash.substr(
      window.location.hash.indexOf("?")
    );
  }
  const hrefparams = [];
  myURL.searchParams.forEach((value, key) => {
    if (valid) {
        if (valid.includes(key)) {
        hrefparams.push({ key, value });
        }
    }
  });

  return {
    href: window.location.href,
    hash: hash,
    params: hrefparams,
    hostname: window.location.hostname,
    port: window.location.port,
    pathname: window.location.pathname,
    protocol: window.location.protocol,
    set: (url) => {},
  };
};


export const useLocation = (valid) => {
  const [details, setDetails] = useState(loadURLDetails(valid));
  const [validParams, ] = useState(valid);

  window.addEventListener('popstate', () => {
    setDetails(loadURLDetails(validParams))
  });
  window.addEventListener("locationchange", () => {
    setDetails(loadURLDetails(validParams));
  });

  const set = (url) => {  
      window.history.pushState(null, "", url);
      setDetails(loadURLDetails(validParams)); 
    }

  useEffect(() => {
    setDetails(loadURLDetails(validParams))    
  }, [validParams]);

  return { ...details, set};
}

export default useLocation;