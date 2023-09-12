import { classNames } from 'shared/lib/classNames/classNames';
import style from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(style.Loader)}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
