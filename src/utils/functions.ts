
export function setTimeoutPromise(timeout: number) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}

export function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}