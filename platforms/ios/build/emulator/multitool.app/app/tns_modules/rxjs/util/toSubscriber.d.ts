import { Subscriber } from '../Subscriber';
import { PartialObserver } from '../Observer';
export declare function toSubscriber<T>(nextOrObserver?: PartialObserver<T> | ((value: T) => void), error?: (error: any) => void, complete?: () => void): Subscriber<T>;
