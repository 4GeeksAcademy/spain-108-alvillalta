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
    localStorage.setItem("characters-storage", JSON.stringify(charactersData.results));
    return charactersData.results;
  }
  catch {
    console.error("Error getting characters");
  }
};

export const getCharacterDetails = async (characterId) => {

  const uri = `${host}/people/${characterId}`
  const options = { method: "GET" };

  const characterDetailsStorage = localStorage.getItem(`character-details-storage-${characterId}`);
  if (characterDetailsStorage) {
    return JSON.parse(characterDetailsStorage);
  }

  try {
    const response = await fetch(uri, options);
    if (!response.ok) {
    console.log(response.status, " error");
    }
    const characterDetailsData = await response.json();
    localStorage.setItem(`character-details-storage-${characterId}`, JSON.stringify(characterDetailsData.result.properties));
    return characterDetailsData.result.properties;
  }
  catch {
    console.error("Error getting character details");
  }
};

export const getPlanets = async () => {

  const uri = `${host}/planets`
  const options = { method: "GET" };

  const planetsStorage = localStorage.getItem(`planets-storage`);
  if (planetsStorage) {
    return JSON.parse(planetsStorage);
  }

  try {
    const response = await fetch(uri, options);
    if (!response.ok) {
    console.log(response.status, " error");
    }
    const planetsData = await response.json();
    localStorage.setItem(`planets-storage`, JSON.stringify(planetsData.results));
    return planetsData.results;
  }
  catch {
    console.error("Error getting planets");
  }
};

export const getPlanetDetails = async (planetId) => {

  const uri = `${host}/planets/${planetId}`
  const options = { method: "GET" };

  const planetDetailsStorage = localStorage.getItem(`planet-details-storage-${planetId}`);
  if (planetDetailsStorage) {
    return JSON.parse(planetDetailsStorage);
  }

  try {
    const response = await fetch(uri, options);
    if (!response.ok) {
    console.log(response.status, " error");
    }
    const planetDetailsData = await response.json();
    localStorage.setItem(`planet-details-storage-${planetId}`, JSON.stringify(planetDetailsData.result.properties));
    return planetDetailsData.result.properties;
  }
  catch {
    console.error("Error getting planet details");
  }
};

export const getStarships = async () => {

  const uri = `${host}/starships`
  const options = { method: "GET" };

  const starshipsStorage = localStorage.getItem(`starships-storage`);
  if (starshipsStorage) {
    return JSON.parse(starshipsStorage);
  }

  try {
    const response = await fetch(uri, options);
    if (!response.ok) {
    console.log(response.status, " error");
    }
    const starshipsData = await response.json();
    localStorage.setItem(`starships-storage`, JSON.stringify(starshipsData.results));
    return starshipsData.results;
  }
  catch {
    console.error("Error getting starships");
  }
};

export const getStarshipDetails = async (starshipId) => {

  const uri = `${host}/starships/${starshipId}`
  const options = { method: "GET" };

  const starshipDetailsStorage = localStorage.getItem(`starship-details-storage-${starshipId}`);
  if (starshipDetailsStorage) {
    return JSON.parse(starshipDetailsStorage);
  }

  try {
    const response = await fetch(uri, options);
    if (!response.ok) {
    console.log(response.status, " error");
    }
    const starshipDetailsData = await response.json();
    localStorage.setItem(`starship-details-storage-${starshipId}`, JSON.stringify(starshipDetailsData.result.properties));
    return starshipDetailsData.result.properties;
  }
  catch {
    console.error("Error getting starship details");
  }
};