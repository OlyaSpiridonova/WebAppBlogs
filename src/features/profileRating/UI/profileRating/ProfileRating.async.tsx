import { Suspense, lazy } from 'react';
import { ProfileRatingProps } from './ProfileRating';
import { Skeleton } from '@/shared/UI/Skeleton/Skeleton';

const ProfileRatingLazy = lazy(
    () => import('./ProfileRating'),
);

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ProfileRatingLazy {...props} />
        </Suspense>
    );
};
