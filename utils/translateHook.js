import { useRouter } from "next/router";
import dictionary from "../dictionary";

export const useTranslation = () => {
  const { locales = [], defaultLocale, ...nextRouter } = useRouter();
  const locale = locales.includes(nextRouter.locale || "")
    ? nextRouter.locale
    : defaultLocale;

  return {
    translate: (term) => {
      const translation = dictionary[locale][term];

      return Boolean(translation) ? translation : term;
    },
  };
};
