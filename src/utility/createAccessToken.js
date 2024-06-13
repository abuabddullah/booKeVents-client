const createAccessToken = (email) => {
  const currentUser = { email: email };
  if (email) {
    // fetch(`http://localhost:5000/api/v1/login/${email}`, {
    //     method: 'PUT',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(currentUser)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    // console.log("data inside useToken", data);
    console.log("data inside useToken", "data");
    // const token = data.token;
    // localStorage.setItem('token', token);
    // })
  }
};

export default createAccessToken;
