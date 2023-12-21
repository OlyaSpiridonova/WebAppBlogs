import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import Star from '../../assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (startsCount: number) => void;
    size?: number;
    selectedStarts?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size = 30, selectedStarts = 0 } = props;
    const [currentStartsCount, setCurrentStarsCount] = useState(selectedStarts);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStarts));

    const onHover = (startsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(startsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    clickable
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [
                            currentStartsCount >= starNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                    )}
                    Svg={Star}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseMove={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating.${starNumber}`}
                    data-selected={currentStartsCount >= starNumber}
                />
            ))}
        </div>
    );
});
