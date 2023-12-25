import { memo } from 'react';
import { Icon } from '@/shared/UI/Icon';
import ButtonUp from '@/shared/assets/icons/circle-up.svg';

interface scrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: scrollToTopButtonProps) => {
    const { className } = props;

    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            Svg={ButtonUp}
            clickable
            onClick={handleToTop}
            width={32}
            height={32}
            className={className}
        />
    );
});
