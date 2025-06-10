const host = "https://playground.4geeks.com/contact";
const user = "alvillalta";

// Fetch
const postUser = async () => {
  const uri = `${host}/agendas/${user}`;
  const options = { method: "POST" };
  try {
    const response = await fetch(uri, options);
    if (response.ok) {
      console.log("User created successfully");
    } else console.error(response.status, " error");
  } catch {
    console.error("Error creating a user");
  }
};

export const getAgenda = async () => {
  const uri = `${host}/agendas/${user}`;
  const options = { method: "GET" };
  try {
    const response = await fetch(uri, options);
    if (response.ok) {
      console.log("Agenda got successfully");
    } else if (response.status === 404) {
      return postUser();
    } else console.error(response.status, " error");
    const agendaJson = await response.json();
    return agendaJson.contacts;
  } catch {
    console.error("Error getting agenda");
  }
};

export const postContact = async (newContact) => {
  const uri = `${host}/agendas/${user}/contacts`;
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newContact),
  };
  try {
    const response = await fetch(uri, options);
    if (response.ok) {
      console.log("Contact posted successfully");
      return await getAgenda();
    } else console.error(response.status, " error");
  } catch {
    console.error("Error posting contact");
  }
};

export const deleteContact = async (contactId) => {
  const uri = `${host}/agendas/${user}/contacts/${contactId}`;
  const options = { method: "DELETE" };
  try {
    const response = await fetch(uri, options);
    if (response.ok) {
      console.log("Contact deleted successfully");
      return await getAgenda();
    } else console.error("Error ", response.status);
  } catch {
    console.error("Error deleting contact");
  }
};

  export const putContact = async (contactToEdit) => {
        const uri = `${host}/agendas/${user}/contacts/${contactToEdit.id}`;
        const options = {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(contactToEdit)
        };
        try {
            const response = await fetch(uri, options);
            if (response.ok) {
                console.log("Contact put successfully");
                return await getAgenda();
            } else console.error("Error ", response.status);
        }
        catch {
            console.error("Error putting contact");
        }
    }
