import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/UI/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import SendIcon from '@/shared/assets/icons/send.svg';
import { Icon } from '@/shared/UI/Icon';
import { HStack } from '@/shared/UI/Stack';
import SearchIcon from '@/shared/assets/icons/search.svg';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation('');
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText);

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onSendComment, onCommentTextChange, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                gap="16"
                max
                className={classNames(cls.AddCommentForm)}
                data-testid="addCommentForm"
            >
                <Input
                    data-testid="addCommentForm.Input"
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                    addonLeft={<Icon Svg={SearchIcon} />}
                />
                <Icon
                    Svg={SendIcon}
                    clickable
                    onClick={onSendHandler}
                    data-testid="addCommentForm.Button"
                />
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
