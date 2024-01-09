/*
    REDUCE 
    -Retornar um valor ( pode ser um novo array, um objeto, string, number, etc..)
    -Aceita 4 parâmetros 
       -acumulador
        - valor atual 
        - index 
        - array completo
*/

const list = [1, 2, 3, 4, 5, 6, 7];

const sum = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual

}, 0)


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'kim Hyun Suk', foundedOn: 1938 },
    {
        name: 'Microsoft',
        marketValue: 415,
        CEO: 'Sayta Nadella',
        foundedOn: 1975,
    },

    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    {
        name: 'Facebook',
        marketValue: 383,
        CEO: 'Mark Zuckeberg',
        foundedOn: 2004,
    },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },


]

const marketValue = companies.reduce((acc, value) => {
    return acc + value.marketValue
},0)


const cart = [
    { ProductName: 'Limão', pricePerkg: 5, kg: 1 },
    { ProductName: 'Maçã', pricePerkg: 3.55, kg: 1.3 },
    { ProductName: 'Abacate', pricePerkg: 1.2, kg: 2 },
    { ProductName: 'Morango', pricePerkg: 5.4, kg: 1.67 },
        { ProductName: 'Abóbora', pricePerkg: 11.9, kg: 3}
]

const finalValue = cart.reduce((acc, value) => {
    const result = value.pricePerkg * value.kg 
    return acc + result 
}, 0)
    
    console.log(`A sua compra ficou no total De: ${finalValue}`)