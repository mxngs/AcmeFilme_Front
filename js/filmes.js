export async function getFilmes(){
    const url = 'http://localhost:8080/v2/acmefilmes/filmes';
    const response = await fetch(url)
    const data = await response.json()

    return data.filmes
}

export async function getFilme(id){
    const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`;
    const response = await fetch(url)
    const data = await response.json()

    return data.filme[0]
}

export async function postFilme(filme){
    const url = 'http://localhost:8080/v2/acmefilmes/filme'
    const options = {
        method: 'POST',
        headrs: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response =  fetch(url, options)
    return response.ok
}

export async function deleteFilme(id){
    const url = `http://10.107.134.40:8080/v2/acmefilmes/filme/${id}`
    const options = {
        method: 'DELETE'
    }
    const response =  fetch(url, options)
    return response.ok
}

