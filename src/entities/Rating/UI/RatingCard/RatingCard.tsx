import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/UI/Card/Card';
import { HStack, VStack } from '@/shared/UI/Stack';
import { Text } from '@/shared/UI/Text/Text';
import { StarRating } from '@/shared/UI/StarRating/StarRating';
import { Modal } from '@/shared/UI/Modal/Modal';
import { Input } from '@/shared/UI/Input/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/UI/Button/Button';
import { Drawer } from '@/shared/UI/Drawer/Drawer';

interface RatingCardProps {
  className?: string;
  title: string;
  feedbackTitle: string;
  hasFeedback?: boolean;
  onCancel?: (startsCount: number) => void;
  onAccept?: (startsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
    } = props;
    const { t } = useTranslation('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    const onSelectStarts = useCallback((selectedStartCount: number) => {
        setStarsCount(selectedStartCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStartCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, starsCount, onAccept]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [starsCount, onCancel]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input placeholder={t('Ваш отзыв')} value={feedback} onChange={setFeedback} />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack gap="8" align="center">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStarts} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen}>
                    <VStack gap="32" max>
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandler}>
                                {t('Закрыть')}
                            </Button>
                            <Button onClick={acceptHandler}>
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                    <VStack gap="32" max>
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button onClick={acceptHandler} fullWidth size={ButtonSize.L}>
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
