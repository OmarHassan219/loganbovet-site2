"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Locale, usePathname, useRouter , routing } from "@/routing";
import { useLocale, useTranslations } from "next-intl";
import { MdOutlineTranslate } from "react-icons/md";
import useClickOutside from "@/utility/useClickOutside";
import { IoIosCheckmark } from "react-icons/io";

export default function LocaleSwitcherSelect({themeState}) {
  //   console.log(Locale);
  //   console.log(usePathname);
  //   console.log(useRouter);
const t = useTranslations("header")
  const [isPending, startTransition] = useTransition();
  const [showLangList, setshowLangList] = useState(false)
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = useLocale();
 

  const router = useRouter();
  const localActive = useLocale();
  const handleLanChange = (cur) => {
    setshowLangList(false)
    router.replace(pathname, { locale: cur });
  };
  let domNode = useClickOutside(() => {
    
    setshowLangList(false);
  });
  return (
    <div>
      <div onClick={() => setshowLangList(prev => !prev)} className="current-locale-container">
      <MdOutlineTranslate color={themeState === "light" ? "#363636" : "white"} size={20}/>
      </div>
      {showLangList ?
      <div ref={domNode} className="locale-options-container">
        {routing.locales.map((locale) => (
          <p key={locale}
        onClick={() => handleLanChange(locale)}
      value={locale}
    className={`locale-option ${currentLocale === locale ? 'active' :''}`}
  >
          {t('locale', { locale })}
         {currentLocale === locale ? <IoIosCheckmark size={23}/> : ""}

        </p>
      ))}
        </div>
        :
        ""
    }
      </div>
  );
}
