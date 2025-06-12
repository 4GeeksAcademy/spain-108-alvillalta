const host = "https://https://www.swapi.tech/api";
const imagesHost = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img"

export const getPeople = async () => {
  const uri = `${host}/people`
  const options = { method: "GET" };
  try {
    const response = await fetch(uri, options);
    if (response.ok) {
      console.log("People got successfully");
    } else console.error(response.status, " error");
    return await response.json();
  } catch {
    console.error("Error getting people");
  }
};