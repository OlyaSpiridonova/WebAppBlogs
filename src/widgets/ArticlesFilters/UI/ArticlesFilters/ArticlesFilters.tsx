import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/UI/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { Input } from '@/shared/UI/Input';
import { VStack } from '@/shared/UI/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { TabItem } from '@/shared/UI/Tabs';
import cls from './ArticlesFilters.module.scss';
import { Icon } from '@/shared/UI/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (tab: TabItem<ArticleType>) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        sort,
        order,
        type,
        search,
        onChangeSearch,
        onChangeOrder,
        onChangeSort,
        onChangeType,
    } = props;
    const { t } = useTranslation('');
    return (
        <Card
            padding="24"
            className={classNames(cls.ArticlesFilters, {}, [className])}
        >
            <VStack gap="32">
                <Input
                    size="s"
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Найти')}
                    addonLeft={<Icon Svg={SearchIcon} />}
                />
                <ArticleTypeTabs value={type} onChangeTab={onChangeType} />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
});
