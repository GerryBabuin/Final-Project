// const [recipeData, setRecipeData] = useState(null);

// useEffect(() => {
//   fetch(`/recipes/url`, {
//     method: "POST",
//     body: JSON.stringify({
//       url: `https://www.101cookbooks.com/sourdough-galette-with-delicata-squash/`,
//     }),
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       setRecipeData(data.data);
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
