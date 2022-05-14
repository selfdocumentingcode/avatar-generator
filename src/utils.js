export function getHash(inputString) {
    var hash = 0;
    if (inputString.length == 0) return hash;

    for (i = 0; i < inputString.length; i++) {
        char = inputString.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }

    return Math.abs(hash);
}
