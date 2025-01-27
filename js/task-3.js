function getElementWidth(content, padding, border) {
    // Değerlerden 'px' kısmını çıkararak sadece sayıları al
    const contentWidth = parseFloat(content);
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);

    // Toplam genişliği hesapla (box-sizing: border-box varsayımıyla)
    const totalWidth = contentWidth + 2 * (paddingValue + borderValue);

    // Toplam genişliği 'px' formatında döndür
    return `${totalWidth}px`;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200