export default function hexToRgbGrey(hex) {
    var bigint = parseInt(hex, 16);
    var r = ((bigint >> 16) & 255) * 0.299;
    var g = ((bigint >> 8) & 255) * 0.587;
    var b = (bigint & 255) * 0.114;
    r = Math.round(r)
    g = Math.round(g)
    b = Math.round(b)
    return r + "," + g + "," + b;
}
