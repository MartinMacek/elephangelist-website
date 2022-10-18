export default async function fetchStatus(req, res) {
  const {} = req;
  try {
    const response = await fetch("https://www.donio.cz/widget/7321.json");
    return response.json();

    res.status(response.status).json({ response });
  } catch (error) {
    // Catch and log errors - return a 500 with a message
    console.error(error);
  }
}
