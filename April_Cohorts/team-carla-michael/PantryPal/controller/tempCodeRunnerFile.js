export const getRecipesById = async (id) => {
  //let recipeList ;
  mongoose.connect(process.env.DB_URL);
 const recipeList =  await Recipe.find({ ingredients: { $in: [id] } })
  .then((res)=>{
    console.log(res.length);    
    return res;
})
return recipeList;
}