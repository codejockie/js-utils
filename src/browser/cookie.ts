type UriComponent = string | number | boolean;
interface Options {
  /** dtl: Days to live in milliseconds */
  dtl: number;
  /** domain: Domain address to register the cookie */
  domain: string;
  /** expires: Expiry date in UTC datetime format */
  expires: string;
  /** path: Path to register the cookie */
  path: string;
  /** secure: Set to true to restrict cookie to secure connection only */
  secure: boolean;
}

export function setCookie(
  name: string,
  value: UriComponent,
  { dtl, expires, domain, path, secure = false }: Partial<Options>
): void {
  let cookie = `${name}=${encodeURIComponent(value)}`;
  cookie += typeof dtl == "number" ? `; max-age=${dtl}` : "";
  cookie += path ? `; path=${path}` : "";
  cookie += domain ? `; domain=${domain}` : "";
  cookie += expires ? `; expires=${expires}` : "";
  // Transmit cookie over a secure (i.e. encrypted) connection e.g. HTTPs
  cookie += secure ? `; secure` : "";
  document.cookie = cookie;
}

export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");

    if (name == key.trim()) {
      return decodeURIComponent(value);
    }
  }

  return null;
}

export function checkCookie(name: string): boolean {
  return getCookie(name) != null;
}

/**
 * If you specified a path, and domain attribute for the cookie,
 * you'll also need to include them when deleting it.
 */
export function deleteCookie(
  name: string,
  { expires, domain, path }: Partial<Options>
): void {
  let cookie = `${name}=; max-age=${0}`;
  cookie += path ? `; path=${path}` : "";
  cookie += domain ? `; domain=${domain}` : "";
  cookie += expires ? `; expires=${expires}` : "";
  document.cookie = cookie;
}
