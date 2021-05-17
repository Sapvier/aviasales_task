export const requestSearchId = () => {
    return fetch(`https://front-test.beta.aviasales.ru/search`)
}

export const requestTickets = (searchId) => {
    return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}&limit=5`)
}