import { OperationOptions } from 'retry';

declare function AsyncRetry<A>(
    fn: AsyncRetry.RetryFunction<A>,
    opts?: AsyncRetry.Options
): Promise<A>;

declare namespace AsyncRetry {
    interface Options extends OperationOptions {
        onRetry?: (e: Error, attempt: number) => any;
        awaitOnRetry?: boolean;
    }

    type RetryFunction<A> = (bail: (e: Error) => void, attempt: number) => A|Promise<A>;
}

export = AsyncRetry;
