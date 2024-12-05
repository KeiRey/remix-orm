export function formatCurrency(value: number) {
    const options: Intl.NumberFormatOptions = {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }
    return new Intl.NumberFormat('id-ID', options).format(value)
}