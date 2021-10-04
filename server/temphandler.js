const addClient = (req, res) => {
  const newClientId = uuidv4();
  const { age, name, gender, company, phone, address } = req.body;
  const newClient = {
    id: newClientId,
    isActive: true,
    age: age,
    name: name,
    gender: gender,
    company: company,
    phone: phone,
    address: address,
  };
  // check for email before adding

  // add new client
  clients.push(newClient);

  Object.values(newClient).includes(undefined)
    ? res.status(404).json({ status: "Client was not added" })
    : res
        .status(200)
        .json({ status: "Client successfully added", message: newClient });
};
