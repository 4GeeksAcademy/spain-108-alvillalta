export const initialStore=()=>{
  return{
    user: "alvillalta",
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
      
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case "get_contacts":

      const contacts = action.payload

      return {...store,
        contacts: contacts
      }

    default:
      throw Error('Unknown action.');
  }    
}
