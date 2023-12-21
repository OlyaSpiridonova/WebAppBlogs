import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/UI/Avatar';
import { Text } from '@/shared/UI/Text';
import { Skeleton } from '@/shared/UI/Skeleton';
import { AppLink } from '@/shared/UI/AppLink';
import { VStack } from '@/shared/UI/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.CommentCard, {}, [className])}
                data-testid="CommentCard.Loading"
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        className={cls.username}
                        width={100}
                        height={16}
                    />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.CommentCard)}
            data-testid="CommentCard.Content"
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                <Avatar size={30} src={comment?.user.avatar} />
                <Text
                    className={cls.username}
                    title={comment?.user.username}
                    bold
                />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </VStack>
    );
});
