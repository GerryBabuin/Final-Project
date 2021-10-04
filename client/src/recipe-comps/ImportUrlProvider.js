// import React, { useState, createContext } from "react";
// // import { useHistory } from "react-router";
// import Cinnamon from "../images/mockup-graphics-XxaIHwP5lsE-unsplash.png";
// import NewRecipe from "./NewRecipe";

// export const NewRecipeData = createContext({});

// export const NewRecipeProvider = ({ children }) => {
//   const initialState = {
//     name: "",
//     description: "",
//     image: "",
//     ingredients: [],
//     instructions: [],
//     tags: "",
//     servings: "",
//     time: "",
//     active: "",
//     cook: "",
//     inactive: "",
//     prep: "",
//     ready: "",
//     total: "",
//   };
//   const [url, setUrl] = useState();
//   const [recipeData, setRecipeData] = useState(initialState);

//   const convertUrl = (ev) => {
//     const postUrl = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ url }),
//     };
//     fetch("/recipes/url", postUrl)
//       .then((res) => res.json())
//       .then((data) => {
//         setRecipeData(data.data);
//         // console.log("IU Recipe Data", data.data);
//       });
//   };

//   const handleClick = (ev) => {
//     ev.preventDefault();
//     ev.stopPropagation();
//     convertUrl();
//   };
//   return (
//     <React.Fragment>
//       {/* {!recipeData ? (
//         <div>
//           <p>Just preparing your recipe</p>
//         </div>
//       ) : ( */}
//       <div className="grid">
//         <div className="main-content">
//           <h2>What are we cooking today?</h2>
//           <form onSubmit={handleClick}>
//             <input
//               type="text"
//               placeholder="Paste recipe address here"
//               name="url"
//               onChange={(ev) => {
//                 setUrl(ev.target.value);
//               }}
//             />
//             <button className="home-login-button" type="import">
//               Import
//             </button>
//           </form>

//           <img src={Cinnamon} className="import-pic" alt="hot pepper" />
//         </div>
//       </div>
//       <NewRecipe.Provider
//         value={{
//           recipeData,
//           // name,
//           // description,
//           // ingredients,
//           // instructions,
//           // tags,
//           // prep,
//           // total,
//         }}
//       >
//         {children}
//       </NewRecipe.Provider>
//     </React.Fragment>
//   );
// };

// export default NewRecipeProvider;
