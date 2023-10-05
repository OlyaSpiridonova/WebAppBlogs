import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || '',
        height: size || '',
    }), [size]);

    const mods: Mods = {};

    return (
        <img src={src} alt={alt} style={styles} className={classNames(cls.Avatar)} />
    );
};
