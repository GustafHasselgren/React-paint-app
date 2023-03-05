
const base_url = 'http://127.0.0.1:5000';

export async function fetchSchemes() {
    //Filtrera, behöver bara ID och namn
    let response = await fetch(base_url + '/allschemes')
    .then((response) => response.json())
    .then((data) => data)

    return response
}

export async function fetchScheme(id) {
    let response = await fetch(base_url + '/scheme/' + id)
    .then((response) => response.json())
    .then((data) => data)

    return response
}