import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/UI/Card';
import { Skeleton } from '@/shared/UI/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';
import { HStack, VStack } from '@/shared/UI/Stack';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        if (view === ArticleView.BIG) {
            return (
                <Card
                    padding="24"
                    fullWidth
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <VStack max gap="16">
                        <HStack gap="8" max>
                            <Skeleton width={32} height={32} border="50%" />
                            <Skeleton width={150} height={16} />
                        </HStack>
                        <Skeleton width="100%" height={75} />
                        <Skeleton width="100%" height={30} />
                        <Skeleton height={420} />
                        <Skeleton height={65} />
                        <HStack justify="between" max>
                            <Skeleton width={140} height={32} />
                            <Skeleton width={90} height={32} />
                        </HStack>
                    </VStack>
                </Card>
            );
        }

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <Skeleton height={140} className={cls.image} />
                    <VStack gap="8" className={cls.info}>
                        <Skeleton width="100%" height={120} />
                        <VStack gap="8" max className={cls.footer}>
                            <HStack justify="between" max>
                                <Skeleton width={85} height={22} />
                                <Skeleton width={85} height={22} />
                            </HStack>
                            <HStack gap="4">
                                <Skeleton width={32} height={32} border="50%" />
                                <Skeleton width={100} height={22} />
                            </HStack>
                        </VStack>
                    </VStack>
                </Card>
            </div>
        );
    },
);
