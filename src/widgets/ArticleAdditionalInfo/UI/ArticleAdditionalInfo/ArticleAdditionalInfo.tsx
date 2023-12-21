import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/UI/Stack';
import { Avatar } from '@/shared/UI/Avatar';
import { Text } from '@/shared/UI/Text';
import { Button } from '@/shared/UI/Button';

interface ArticleAdditionalInfoProps {
    className?: string;
    autor: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
}

export const ArticleAdditionalInfo = memo(
    (props: ArticleAdditionalInfoProps) => {
        const { className, autor, createdAt, views, onEdit } = props;
        const { t } = useTranslation('');
        return (
            <VStack gap="32" className={classNames('', {}, [className])}>
                <HStack gap="8">
                    <Avatar src={autor.avatar} size={32} />
                    <Text text={autor.username} bold />
                    <Text text={createdAt} />
                </HStack>
                <Button onClick={onEdit}>{t('Редактировать')}</Button>
                <Text text={t('{{count}} просмотров', { count: views })} />
            </VStack>
        );
    },
);
