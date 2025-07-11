// MyNavbar.js (服务端组件)
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { getTranslation } from "@/lib/i18n";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher"; // 新的客户端组件
import { ThemeSwitcher } from "./ThemeSwitcher";
import FriendsLink from "./FriendsLink";

export default function MyNavbar({ locale = 'en' }) {
  const t = function(key){
    return getTranslation(locale, key);
  }
  return (
    <Navbar classNames={{
      wrapper: "page-container"
    }}>
      <NavbarBrand>
        <Link href="/" className="text-foreground">
          <Image src="/images/logo.png" alt="TwitterDownload" width={32} height={32} />
          <p className="font-bold text-inherit mx-3 text-2xl">
            {t('TwitterXDownload')}
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-6" justify="center">
        {process.env.NEXT_PUBLIC_SEARCH_ENABLED != 0 && <NavbarItem>
          <Link color="foreground" href="/tweets">
          {t('Search Tweets')}
          </Link>
        </NavbarItem>}
        <NavbarItem>
          <Link color="foreground" href="/downloader">
          {t('Downloader')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://news.525.hk" target="_blank">
          {t('Self Hosted')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <FriendsLink locale={locale} />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <LanguageSwitcher locale={locale} />
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}