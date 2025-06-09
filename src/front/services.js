const host = "https://playground.4geeks.com/contact";
const user = "alvillalta";

// Fetch
const postUser = async () => {
  const uri = `${host}/agenda/${user}`;
  const options = { method: "POST" };
  try {
    const response = await fetch(uri, options);
    if (response.ok) {
      console.log("User created");
    } else console.error(response.status, " error");
  } catch {
    console.error("Error creating a user");
  }
};

export const getAgenda = async () => {
  const uri = `${host}/agenda/${user}`;
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

/*     const postTodo = async (todoToSend) => {
        const uri = `${host}/todos/${user}`;
        const options = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(todoToSend)
        };
        try {
            const response = await fetch(uri, options);
            getTodos();
            if (response.ok) {
                console.log("Todo posted successfully");
            }
            else console.error(response.status, " error");
        }
        catch {
            console.error("Error posting todos");
        }
    }

    const deleteTodo = async (todoId) => {
        const uri = `${host}/todos/${todoId}`;
        const options = { method: "DELETE" };
        try {
            const response = await fetch(uri, options);
            getTodos();
            if (response.ok) {
                console.log("Todo deleted successfully");
            } else console.error("Error ", response.status);
        }
        catch {
            console.error("Error deleting todos");
        }
    }

    const putTodo = async (todoId, todoToModify) => {
        const uri = `${host}/todos/${todoId}`;
        const options = {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(todoToModify)
        };
        try {
            const response = await fetch(uri, options);
            getTodos();
            if (response.ok) {
                console.log("Todo put successfully");
            } else console.error("Error ", response.status);
        }
        catch {
            console.error("Error putting todo");
        }
    } */
