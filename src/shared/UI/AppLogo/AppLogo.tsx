import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import LogoSvg from '../../assets/icons/appLogo.svg';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size }: AppLogoProps) => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <LogoSvg width={size} height={size} className={cls.appLogo} />
        </HStack>
    );
});
