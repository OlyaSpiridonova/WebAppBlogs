import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/UI/Text';
import { VStack } from '@/shared/UI/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Card } from '@/shared/UI/Card';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('');

    if (isLoading) {
        return (
            <VStack max gap="16">
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }
    return (
        <VStack gap="16" max>
            {comments?.length ? (
                comments.map((comment) => (
                    <Card padding="24" fullWidth>
                        <CommentCard
                            comment={comment}
                            isLoading={isLoading}
                            key={comment.id}
                        />
                    </Card>
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </VStack>
    );
});
