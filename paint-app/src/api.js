
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

export async function fetchPaints() {
    let response = await fetch(base_url + '/paints')
    .then((response) => response.json())
    .then((data) => data)

    return response
}

export async function insertStep(schemeId, areaName, paint, type, method) {

    let data = {
        'schemeId': schemeId,
        'areaName': areaName,
        'paint': paint,
        'type': type,
        'method': method
    };

    let response = await fetch(base_url + '/step', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => data)

    return response
}