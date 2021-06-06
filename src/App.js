const App = () => {
  // Initialize HCL SDK API
  const API = process.env.REACT_APP_API;
  const hclAPI = new window.HclAPI({
    apiKey: API, // To replace by a working API key
  });
  const params = {
    first: 50,

    offset: 0,

    country: "ca",

    specialties: ["SP.WCA.75"],
  };

  hclAPI
    .activities(params)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));

  return (
    <div className='App'>
      <h1>YES</h1>
    </div>
  );
};

export default App;
