const createAccessToken = (email, name) => {
  const currentUser = { email, name };
  if (email) {
    fetch(`http://localhost:5000/api/v1/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data inside useToken", data);
        const token = data.token;
        localStorage.setItem("token", token);
      });
  }
};

export default createAccessToken;
