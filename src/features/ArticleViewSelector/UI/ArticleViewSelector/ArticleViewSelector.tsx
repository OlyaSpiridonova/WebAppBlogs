import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { Icon } from '@/shared/UI/Icon';
import { ArticleView } from '../../../../entities/Article/model/consts/articleConsts';
import cls from './ArticleViewSelector.module.scss';
import { Card } from '@/shared/UI/Card';
import { HStack } from '@/shared/UI/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <Card className={classNames(cls.ArticleViewSelector, {}, [className])}>
            <HStack gap="8">
                {viewTypes.map((item) => (
                    <Icon
                        key={item.view}
                        clickable
                        onClick={onClick(item.view)}
                        Svg={item.icon}
                        className={classNames(
                            '',
                            { [cls.notSelected]: item.view !== view },
                            [],
                        )}
                    />
                ))}
            </HStack>
        </Card>
    );
});
