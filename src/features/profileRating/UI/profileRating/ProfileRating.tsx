import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/UI/Skeleton';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation('');
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetProfileRating({
        userId: userData?.id ?? '',
        profileId,
    });
    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback((startsCount: number, feedback?: string) => {
        try {
            rateProfileMutation({
                userId: userData?.id ?? '',
                profileId,
                rate: startsCount,
                feedback,
            });
        } catch (error) {
            console.log(error);
        }
    }, [profileId, rateProfileMutation, userData?.id]);

    const onAccept = useCallback((startsCount: number, feedback?: string) => {
        handleRateProfile(startsCount, feedback);
    }, [handleRateProfile]);

    const onCancel = useCallback((startsCount: number) => {
        handleRateProfile(startsCount);
    }, [handleRateProfile]);

    if (isLoading) {
        return (
            <Skeleton width="100%" height={120} />
        );
    }
    const rating = data?.[0];

    return (
        <RatingCard
            className={className}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте комментарий о профиле!')}
            hasFeedback
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
        />
    );
});

export default ProfileRating;
