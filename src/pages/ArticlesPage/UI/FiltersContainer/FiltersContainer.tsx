import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;

    const {
        sort,
        order,
        search,
        type,
        onChangeSort,
        onChangeType,
        onChangeOrder,
        onChangeSearch,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            sort={sort}
            order={order}
            search={search}
            type={type}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            className={className}
        />
    );
});
