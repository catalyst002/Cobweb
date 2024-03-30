interface Options {
    baseUrl: string;
}
interface RequestArguments {
    path: string;
    headers?: HeadersInit;
    params?: Record<string, string | undefined>;
    signal?: AbortSignal;
}
interface PostArguments extends RequestArguments {
    body?: Record<string, unknown>;
}
export declare class FetchUtil {
    baseUrl: Options['baseUrl'];
    constructor({ baseUrl }: Options);
    get<T>({ headers, signal, ...args }: RequestArguments): Promise<T>;
    getBlob({ headers, signal, ...args }: RequestArguments): Promise<Blob>;
    post<T>({ body, headers, signal, ...args }: PostArguments): Promise<T>;
    put<T>({ body, headers, signal, ...args }: PostArguments): Promise<T>;
    delete<T>({ body, headers, signal, ...args }: PostArguments): Promise<T>;
    private createUrl;
}
export {};
