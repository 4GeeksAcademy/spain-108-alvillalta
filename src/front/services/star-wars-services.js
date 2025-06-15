const host = "https://www.swapi.tech/api";
                

export const getCharacters = async () => {

  //  Declarations
  const uri = `${host}/people`
  const options = { method: "GET" };

  //  Local Storage
  const charactersStorage = localStorage.getItem("characters-storage");
  if (charactersStorage) {
    return JSON.parse(charactersStorage);
  }

  //  Fetch people
  try {
    const response = await fetch(uri, options);
    if (!response.ok) {
    console.log(response.status, " error");
    }
    const charactersData = await response.json();
    localStorage.setItem("characters-storage", JSON.stringify(charactersData.results))
    return charactersData.results;
  } catch {
    console.error("Error getting characters");
  }
};


export const getCharacterDetails = async (characterId) => {

  //  Declarations
  const uri = `${host}/people/${characterId}`
  const options = { method: "GET" };

  //  Local Storage
  const characterDetailsStorage = localStorage.getItem(`character-details-storage-${characterId}`);
  if (characterDetailsStorage) {
    return JSON.parse(characterDetailsStorage);
  }

  //  Fetch people
  try {
    const response = await fetch(uri, options);
    if (!response.ok) {
    console.log(response.status, " error");
    }
    const characterDetailsData = await response.json();
    localStorage.setItem(`character-details-storage-${characterId}`, JSON.stringify(characterDetailsData.result.properties))
    return characterDetailsData.result.properties;
  } catch {
    console.error("Error getting character details");
  }
};
