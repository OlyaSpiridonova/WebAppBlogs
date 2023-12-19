import { Card } from '@/shared/UI/Card';
import { Skeleton } from '@/shared/UI/Skeleton';
import { HStack, VStack } from '@/shared/UI/Stack';

export const ProfileCardSkeleton = () => {
    return (
        <Card padding="24" fullWidth>
            <VStack gap="32">
                <HStack max justify="center">
                    <Skeleton border="100%" width={128} height={128} />
                </HStack>
                <HStack max gap="32">
                    <VStack max gap="16">
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>

                    <VStack max gap="16">
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};
