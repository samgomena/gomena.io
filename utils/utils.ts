// See: https://stackoverflow.com/questions/1484506/random-color-generator
export function rainbow(numOfSteps: number, step: number) {
  // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
  // Adam Cole, 2011-Sept-14
  // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
  let r: number, g: number, b: number;
  let h = step / numOfSteps;
  let i = ~~(h * 6);
  let f = h * 6 - i;
  let q = 1 - f;
  switch (i % 6) {
    case 0:
      r = 1;
      g = f;
      b = 0;
      break;
    case 1:
      r = q;
      g = 1;
      b = 0;
      break;
    case 2:
      r = 0;
      g = 1;
      b = f;
      break;
    case 3:
      r = 0;
      g = q;
      b = 1;
      break;
    case 4:
      r = f;
      g = 0;
      b = 1;
      break;
    case 5:
      r = 1;
      g = 0;
      b = q;
      break;
  }
  // TODO: Verify this change doesn't break everything
  //   let c =
  //     "#" +
  //     ("00" + (~~(r * 255)).toString(16)).slice(-2) +
  //     ("00" + (~~(g * 255)).toString(16)).slice(-2) +
  //     ("00" + (~~(b * 255)).toString(16)).slice(-2);
  //   return c;
  const getOctet = (o) => ("00" + (~~(o * 255)).toString(16)).slice(-2);
  return `#${[r, g, b].map(getOctet).join("")}`;
}

export function stepColor(color) {
  const { h, s, l } = color.getHSL({
    h: 0,
    s: 0,
    l: 0,
  });
  return color.setHSL(h + 0.00015, s, l);
}

type Browser =
  | "Opera"
  | "Chrome"
  | "Brave"
  | "Safari"
  | "Firefox"
  | "IE"
  | "Edge"
  | "Unknown";
/**
 * Gets the name of the browser from the navigators userAgent
 */
export function getBrowser(): Browser {
  const userAgent = navigator.userAgent;
  const match = userAgent.match(/(chrome|opera|safari|firefox|msie)/i) ?? [];
  switch (match[1]) {
    case "Chrome":
      // @ts-expect-error TypeScript doesn't support browser specific fields, such as this one.
      //See: https://github.com/microsoft/TypeScript/issues/41532
      if (navigator.brave?.isBrave().then((res: boolean) => res)) {
        return "Brave";
      }
      if (userAgent.includes("Edge")) {
        return "Edge";
      }
      return "Chrome";
    case "msie":
      return "IE";
    case "Opera":
    case "Safari":
    case "Firefox":
      return match[1] as Browser;
    default:
      return "Unknown";
  }
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
