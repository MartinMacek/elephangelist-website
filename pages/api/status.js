export default async function fetchStatus(req, res) {
  try {
    const data = await fetch("https://www.donio.cz/widget/7321.json", {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    return data.json();
  } catch (error) {
    // Catch and log errors - return a 500 with a message
    console.error(error);
  }
}
