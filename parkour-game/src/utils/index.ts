export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
}

export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

export function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

export function radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
}