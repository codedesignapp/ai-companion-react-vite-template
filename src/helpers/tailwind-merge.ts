import { extendTailwindMerge, type ClassNameValue } from "tailwind-merge";
import { getPrefix, getVersion } from "../store";

const cache = new Map<string | undefined, ReturnType<typeof extendTailwindMerge>>();

export function twMerge(...classLists: ClassNameValue[]): string {
  const prefix = getPrefix();
  const version = getVersion();

  const cacheKey = `${prefix}.${version}`;
  const cacheValue = cache.get(cacheKey);

  if (cacheValue) {
    return cacheValue(...classLists);
  }

  const twMergeFn = extendTailwindMerge({
    extend: {
      classGroups: {
        "bg-image": ["bg-arrow-down-icon", "bg-check-icon", "bg-dash-icon", "bg-dot-icon"],
        shadow: ["shadow-sm-light"],
      },
    },
    prefix,
  });
  cache.set(cacheKey, twMergeFn);

  return twMergeFn(...classLists);
}
