import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import cls from './ArticlesPage.module.scss';
import { articlePageReducer } from '../../model/slice/articlePageSlice';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlePageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <StickyContentLayout
                left={<ViewSelectorContainer />}
                content={
                    <Page
                        data-testid="ArticlesPage"
                        onScrollEnd={onLoadNextPart}
                        className={classNames(cls.ArticlesPage, {}, [
                            className,
                        ])}
                    >
                        <ArticleInfiniteList className={cls.list} />
                        <ArticlePageGreeting />
                    </Page>
                }
                // eslint-disable-next-line i18next/no-literal-string
                right={<FiltersContainer />}
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
