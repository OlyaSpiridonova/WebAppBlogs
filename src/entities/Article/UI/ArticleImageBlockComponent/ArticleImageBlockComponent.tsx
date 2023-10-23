import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/UI/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation('');
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} className={cls.img} alt={block.title} />
            {block.title && (
                <Text title={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
