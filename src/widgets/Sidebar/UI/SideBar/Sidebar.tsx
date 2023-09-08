import { classNames } from "shared/lib/classNames/classNames";
import style from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
};
