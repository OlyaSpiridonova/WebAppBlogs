import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject, ReactNode, memo, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        wrapperRef, triggerRef, callback: onScrollEnd,
    });
    return (
        <section ref={wrapperRef} className={classNames(cls.Page)}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
