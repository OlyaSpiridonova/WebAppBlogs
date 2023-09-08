import { classNames } from "shared/lib/classNames/classNames";
import style from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/UI/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.Navbar)}>
      <div className={classNames(style.Navbar__links)}>
        <AppLink
          to={"/"}
          theme={AppLinkTheme.SECONDARY}
          className={style.Navbar__links__item}
        >
          Главная
        </AppLink>
        <AppLink
          to={"/about"}
          theme={AppLinkTheme.SECONDARY}
          className={style.Navbar__links__item}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
