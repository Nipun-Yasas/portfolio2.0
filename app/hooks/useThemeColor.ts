import { useEffect, useState } from "react";

export function useThemeColor(
  variableName: string,
  fallback: string = "#ffffff"
): string {
  const [color, setColor] = useState(fallback);

  useEffect(() => {
    const updateColor = () => {
      const val = getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim();
      if (val) {
        setColor(val);
      }
    };

    updateColor();

    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [variableName]);

  return color;
}
