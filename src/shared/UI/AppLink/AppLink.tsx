import { classNames } from "shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";
import style from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(style.AppLink, {}, [className, style[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
