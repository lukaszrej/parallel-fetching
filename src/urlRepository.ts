const BASE_URL = "https://run.mocky.io/v3/";
const HEADER_API_URL = process.env.REACT_APP_HEADER_URL;
const SIDEBAR_API_URL = process.env.REACT_APP_SIDEBAR_URL;
const BREADCRUMBS_API_URL = process.env.REACT_APP_BREADCRUMBS_URL;
const CONTENT_API_URL = process.env.REACT_APP_CONTENT_URL;

function generateUrlWithDelay(URL: string, delay: number) {
  if (!URL) return;

  return `${BASE_URL}${URL}?mocky-delay=${delay}ms`;
}

export const HEADER_URL = generateUrlWithDelay(HEADER_API_URL as string, 1000);
export const SIDEBAR_URL = generateUrlWithDelay(
  SIDEBAR_API_URL as string,
  1000
);
export const BREADCRUMBS_URL = generateUrlWithDelay(
  BREADCRUMBS_API_URL as string,
  2500
);
export const CONTENT_URL = generateUrlWithDelay(
  CONTENT_API_URL as string,
  3000
);
