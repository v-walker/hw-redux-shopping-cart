
const formatCurrency = (num) => {
    return `$ ${Number(num.toFixed(2)).toLocaleString()}`
}

export { formatCurrency }