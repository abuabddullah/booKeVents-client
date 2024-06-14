const createAccessToken = (email, name) => {
  const currentUser = { email, name };
  console.log("currentUser from frontend",currentUser);
  if (email) {
    fetch(`https://bookevents-server.onrender.com/api/v1/users`, {
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