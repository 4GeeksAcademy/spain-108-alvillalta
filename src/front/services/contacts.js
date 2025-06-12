 const host = "https://playground.4geeks.com/contact";
 const user = "alvillalta";

    const postUser = async () => {
        const uri = `${host}/agendas/${user}`;
        const options = { method: "POST" };
        try {
            const response = await fetch(uri, options);
            if (response.ok) {
                console.log("User created");
            }
            else console.error(response.status, " error");
        }
        catch {
            console.error("Error creating a user");
        }
    }

    export const getAgenda = async () => {
        const uri = `${host}/agendas/${user}`;
        const options = { method: "GET" };
        try {
            const response = await fetch(uri, options);
            if (response.ok) {
                console.log("Todos got successfully");
            }
            else if (response.status === 404) {
                return postUser();
            } else console.error(response.status, " error");
            const agendaJson = await response.json();
            return agendaJson.contacts;
        }
        catch {
            console.error("Error getting todos");
        }
    }