export function inSphere(buffer: Float32Array, options?: { YZ?: number, radius?: number }): Float32Array {
    const radius = options?.radius || 1;
    for (let i = 0; i < buffer.length; i += 3) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = Math.cbrt(Math.random()) * radius;

        const sinPhi = Math.sin(phi);
        const x = r * sinPhi * Math.cos(theta);
        const y = r * sinPhi * Math.sin(theta);
        const z = r * Math.cos(phi);

        buffer[i] = x;
        buffer[i + 1] = y;
        buffer[i + 2] = z;
    }
    return buffer;
}
