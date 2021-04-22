const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response)
    return response.data // this function access axios(package) to get data.
}


// Create a Constant to hold DOM Element Reference--- 
const DOM_ELEMENTS = {
    ranger_list: '.ranger-list' // to ask/access(in html) for class ranger-list
}

// Creation of the Ranger List HTML
const create_list = ( id, name) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${name} </a>`;
    document.querySelector(DOM_ELEMENTS.ranger_list).insertAdjacentHTML('beforeend', html)
}

// Function to Load The API Data and Display to HTML
const load_data = async () => {
    const rangers = await getData();
    
    rangers.forEach( element => create_list(element.id, element.name) )
}

// Function to Clear API Data from the HTML
const clear_data = () => {
    document.querySelector(DOM_ELEMENTS.ranger_list).innerHTML = ''; // semicolon not required but nice to have :)
}