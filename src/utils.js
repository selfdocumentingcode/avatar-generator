export function getHash(inputString) {
    let hash = 0;
    if (inputString.length == 0) return hash;

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }

    return Math.abs(hash);
}
