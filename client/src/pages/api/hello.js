export default function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;
    const serverUrl = process.env.SERVER_URL;
    fetch(serverUrl + "/api/orders/orders/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return res.status(201).json(response.json());
        }
      })
      .catch((error) => {
        return res.status(500).json({ error: "Internal Error" });
      });
  } else {
    return res.status(405).json({ error: "Método no permitido" });
  }
}
