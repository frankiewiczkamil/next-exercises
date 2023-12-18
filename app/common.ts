export function wait<T>(ms: number, data: T) {
    return new Promise<T>((resolve) => {
        setTimeout(() => resolve(data), ms);
    });
}
