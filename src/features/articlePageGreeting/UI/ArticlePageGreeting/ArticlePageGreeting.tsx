import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/UI/Modal/Modal';
import { Text } from '@/shared/UI/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/UI/Drawer';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlePageWasOpen } = useJsonSettings();

    useEffect(() => {
        if (!isArticlePageWasOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpen: true }));
        }
    }, [dispatch, isArticlePageWasOpen]);

    const onClose = () => setIsOpen(false);

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t(
                'Здесь вы можете искать и просматривать статьи на различные темы',
            )}
        />
    );

    if (isMobile) {
        <Drawer>{text}</Drawer>;
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});
