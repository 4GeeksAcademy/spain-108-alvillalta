export const initialStore = () => {
  return {
    contacts: [],
    contactToEdit: {}
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "get-agenda":
      return { ...store, contacts: action.payload };

    case "edit-contact":
      return { ...store, contactToEdit: action.payload };

    default:
      throw Error("Unknown action.");
  }
}
