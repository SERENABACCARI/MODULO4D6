// Definisci una funzione asincrona 
const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    return data;
};

window.onload = async function () {
    const data = await fetchData();

    console.log(data);

    // Seleziono un elemento html dove voglio visualizzare la lista di utenti
    const userList = document.querySelector("#user-list");

    // Creo elementi HTML per ciascun utente 
    data.forEach(user => {
        const userElement = document.createElement("div");
        userElement.innerHTML = `
        <table class="table table-success table-striped-columns d-flex ">
  <thead>
                <tr>
                    <th>Email: ${user.email}</th>
                    <th>Username: ${user.username}</th>
                    <th>Name: ${user.name}</th>
                </tr>
            </thead>
</table>
            
        `;
        userList.appendChild(userElement);
    });

    console.log(data); // Stampo i dati ottenuti




    /*creo un input di testo*/
    /*seleziono id#datalistOptions dove far uscire la lista*/
    const userList3 = document.querySelector("#datalistOptions");

    data.forEach(user => {
        const userElement = document.createElement("option");
       
        userElement.innerHTML = `
        
            <option value="email">${user.email}
            <option value="Username">${user.username}
            <option value="name">${user.name}`

        userList3.appendChild(userElement);
    });

    


};





