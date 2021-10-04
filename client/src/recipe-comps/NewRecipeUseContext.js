// import React, { useState, useContext } from "react";
// import { useHistory } from "react-router";
// // import { NewRecipeProvider } from "./recipe-comps/ImportUrl";

// const NewRecipe = ({
//   name,
//   description,
//   ingredients,
//   instructions,
//   tags,
//   active,
//   cook,
//   inactive,
//   prep,
//   ready,
//   total,
//   image,
// }) => {
//   const [recipe, setRecipe] = useState();

//   const history = useHistory();

//   const saveRecipe = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const postRecipe = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(recipe),
//     };
//     fetch("/recipes/new", saveRecipe)
//       .then((res) => res.json())
//       .then((data) => {
//         // if (res.ok) {
//         //   history.push("/recipes/:id");
//         // } else {
//         //   alert("Recipe did not save.");
//         // }
//       });
//   };
//   // console.log(recipeData, "NewRecipe RecipeData");

//   // $("textarea")
//   //   .each(function () {
//   //     this.setAttribute(
//   //       "style",
//   //       "height:" + this.scrollHeight + "px;overflow-y:hidden;"
//   //     );
//   //   })
//   //   .on("input", function () {
//   //     this.style.height = "auto";
//   //     this.style.height = this.scrollHeight + "px";
//   //   });

//   return (
//     <div className="grid">
//       <div className="main-content">
//         <h2>This looks yummy?</h2>
//         <form>
//           <input
//             type="text"
//             defaultValue={name}
//             id="Name"
//             placeholder="Name"
//             onChange={(e) => {
//               setRecipe({ ...recipe, name: e.target.value });
//             }}
//           />
//           <div className="Time">
//             {/* <input
//               type="text"
//               defaultValue={active}
//               id="Active"
//               placeholder="Active"
//               onChange={(e) => {
//               setRecipe({ ...recipe, active: e.target.value });
//             }}
//             /> */}
//             {/* <input
//               type="text"
//               defaultValue={cook}
//               id="Cook"
//               placeholder="Cook"
//             /> */}
//             {/* <input
//               type="text"
//               defaultValue={inactive}
//               id="Inactive"
//               placeholder="Inactive"
//               onChange={(e) => {
//               setRecipe({ ...recipe, inactive: e.target.value });
//             }}
//             /> */}
//             <input
//               type="text"
//               defaultValue={prep}
//               id="Prep"
//               placeholder="Prep"
//               onChange={(e) => {
//                 setRecipe({ ...recipe, prep: e.target.value });
//               }}
//             />
//             {/* <input
//               type="text"
//               defaultValue={ready}
//               id="Ready"
//               placeholder="Ready"
//               onChange={(e) => {
//               setRecipe({ ...recipe, ready: e.target.value });
//             }}
//             /> */}
//             <input
//               type="text"
//               defaultValue={total}
//               id="Total"
//               placeholder="Total"
//               onChange={(e) => {
//                 setRecipe({ ...recipe, total: e.target.value });
//               }}
//             />
//           </div>
//           <textarea
//             defaultValue={description}
//             id="Description"
//             placeholder="Description"
//             onChange={(e) => {
//               setRecipe({ ...recipe, description: e.target.value });
//             }}
//           />
//           <textarea
//             defaultValue={ingredients}
//             id="Ingredients"
//             placeholder="Ingredients"
//             onChange={(e) => {
//               setRecipe({ ...recipe, ingredients: e.target.value });
//             }}
//           />
//           <textarea
//             id="Instructions"
//             defaultValue={instructions}
//             placeholder="Instructions"
//             onChange={(e) => {
//               setRecipe({ ...recipe, instructions: e.target.value });
//             }}
//           />
//           <input
//             type="text"
//             defaultValue={tags}
//             id="Tags"
//             placeholder="Tags"
//             onChange={(e) => {
//               setRecipe({ ...recipe, tags: e.target.value });
//             }}
//           />
//           <button onClick={saveRecipe}>Save</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewRecipe;
