export const initialStore=()=>{
  return{
    message: null,
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
/*     case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
      
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      }; */

    case "get-agenda":

      return {...store, contacts: action.payload};

    case "delete-contact":
      return {...store, contacts: action.payload}

    default:
      throw Error('Unknown action.');
  }    
}
