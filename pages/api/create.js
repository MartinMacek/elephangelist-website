export default async function create(req, res) {
  const {
    query: { email },
  } = req;

  const response = await fetch("https://api.sendinblue.com/v3/contacts", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.API_KEY,
    },
    body: JSON.stringify({
      email: email,
      emailBlacklisted: false,
      smsBlacklisted: false,
      listIds: [2],
      updateEnabled: true,
    }),
  });
  res.status(response.status).json({
    data: response.data,
    error: response.error,
  });
}
