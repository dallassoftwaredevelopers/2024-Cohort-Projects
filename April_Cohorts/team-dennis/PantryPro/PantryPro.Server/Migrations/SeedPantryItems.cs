
using PantryPro.Server;
using PantryPro.Server.DataBase;

namespace PantryPro.Server.Migrations
{
  public class SeedPantryItems
  {
    public static async Task SeedData(PantryProAppContext context)
    {
      if (context.GroceryItem.Any()) return;

      var item = new List<GroceryItem>

            {
                new GroceryItem
                {
                //Id =  1,
                Name= "Apple",
                Protein= 1,
                GroceryItemTypeId= 1,
                Carbs= 25,
                Calories= 95,
                Weight= 182,
                Fat= 0,
                ImageUrl= "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
                },
                new GroceryItem{

                  //Id =  2,
                  Name= "Banana",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 27,
                  Calories= 105,
                  Weight= 118,
                  Fat= 0,
                ImageUrl= "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww"
                },
                  new GroceryItem{
                  //Id =  3,
                  Name= "Orange",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 21,
                  Calories= 62,
                  Weight= 131,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                  new GroceryItem{
                  //Id =  4,
                  Name= "Grapes",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 16,
                  Calories= 62,
                  Weight= 151,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1625499940894-8796928bf9c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGVzfGVufDB8fDB8fHww"
                },
                  new GroceryItem{
              //Id =  5,
                  Name= "Pineapple",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 13,
                  Calories= 50,
                  Weight= 905,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww"
                },
                  new GroceryItem{
              //Id =  6,
                  Name= "Strawberry",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 7,
                  Calories= 33,
                  Weight= 152,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
              //Id =  7,
                  Name= "Watermelon",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 8,
                  Calories= 30,
                  Weight= 286,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
              //Id =  8,
                  Name= "Kiwi",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 15,
                  Calories= 61,
                  Weight= 183,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l3aXxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
              //Id =  9,
                  Name= "Mango",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 25,
                  Calories= 99,
                  Weight= 336,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFuZ298ZW58MHx8MHx8fDA%3D"
                },
                  new GroceryItem{
              //Id =  10,
                  Name= "Pear",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 15,
                  Calories= 58,
                  Weight= 178,
                  Fat= 0,
                  ImageUrl = "https://plus.unsplash.com/premium_photo-1669905375079-5d7e074fc123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVhcnxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
              //Id =  11,
                  Name= "Peach",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 15,
                  Calories= 39,
                  Weight= 150,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1602813812581-0713dae489da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVhY2h8ZW58MHx8MHx8fDA%3D"
                },
                  new GroceryItem{
              //Id =  12,
                  Name= "Plum",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 11,
                  Calories= 46,
                  Weight= 66,
                  Fat= 0,
                  ImageUrl= "https://plus.unsplash.com/premium_photo-1675234386336-ed98399765d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGx1bXxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
              //Id =  13,
                  Name= "Cherry",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 9,
                  Calories= 50,
                  Weight= 100,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hlcnJ5fGVufDB8fDB8fHww"
                },
                  new GroceryItem{
              //Id =  14,
                  Name= "Grapefruit",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 11,
                  Calories= 42,
                  Weight= 230,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1622912789333-ba8bf8242e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGVmcnVpdHxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
              //Id =  15,
                  Name= "Lemon",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 9,
                  Calories= 29,
                  Weight= 58,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVtb258ZW58MHx8MHx8fDA%3D"
                },
                  new GroceryItem{
              //Id =  16,
                  Name= "Lime",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 11,
                  Calories= 30,
                  Weight= 67,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1620101680155-b251043b700b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGltZXxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
              //Id =  17,
                  Name= "Cantaloupe",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 8,
                  Calories= 34,
                  Weight= 552,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1638865553538-2434be4c62bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FudGFsb3VwZXxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
              //Id =  18,
                  Name= "Apricot",
                  Protein= 1,
                  GroceryItemTypeId= 1,
                  Carbs= 15,
                  Calories= 48,
                  Weight= 35,
                  Fat= 0,
                  ImageUrl= "https://images.unsplash.com/photo-1627931754115-478ed65b4fef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXByaWNvdHxlbnwwfHwwfHx8MA%3D%3D"
                  },
                  new GroceryItem  {
                  //Id =  19,
                  Name= "Carrot",
                  Protein= 9,
                  GroceryItemTypeId= 2,
                  Carbs= 96,
                  Calories= 41,
                  Weight= 100,
                  Fat= 2,
                  ImageUrl = "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fHww"
                },
                  new GroceryItem{
                  //Id =  20,
                  Name= "Broccoli",
                  Protein= 28,
                  GroceryItemTypeId= 2,
                  Carbs= 66,
                  Calories= 34,
                  Weight= 100,
                  Fat= 4,
                  ImageUrl ="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJvY2NvbGl8ZW58MHx8MHx8fDA%3D"
                },
                  new GroceryItem{
                  //Id =  21,
                  Name= "Tomato",
                  Protein= 9,
                  GroceryItemTypeId= 2,
                  Carbs= 39,
                  Calories= 18,
                  Weight= 100,
                  Fat= 2,
                  ImageUrl="https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fHww"
                },
                  new GroceryItem{
                  //Id =  22,
                  Name= "Spinach",
                  Protein= 29,
                  GroceryItemTypeId= 2,
                  Carbs= 36,
                  Calories= 23,
                  Weight= 100,
                  Fat= 4,
                  ImageUrl="https://images.unsplash.com/photo-1580910365203-91ea9115a319?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
                  //Id =  23,
                  Name= "Bell Pepper",
                  Protein= 13,
                  GroceryItemTypeId= 2,
                  Carbs= 60,
                  Calories= 31,
                  Weight= 100,
                  Fat= 3,
                  ImageUrl="https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                  new GroceryItem{
                  //Id =  24,
                  Name= "Potato",
                  Protein= 20,
                  GroceryItemTypeId= 2,
                  Carbs= 170,
                  Calories= 77,
                  Weight= 100,
                  Fat= 1,
                  ImageUrl="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww"
                },
                  new GroceryItem{
                  //Id =  25,
                  Name= "Cucumber",
                  Protein= 7,
                  GroceryItemTypeId= 2,
                  Carbs= 36,
                  Calories= 16,
                  Weight= 100,
                  Fat= 2,
                  ImageUrl="https://images.unsplash.com/photo-1589621316382-008455b857cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D"
                },
                  new GroceryItem{
                  //Id =  26,
                  Name= "Onion",
                  Protein= 11,
                  GroceryItemTypeId= 2,
                  Carbs= 93,
                  Calories= 40,
                  Weight= 100,
                  Fat= 1,
                  ImageUrl="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T25pb258ZW58MHx8MHx8fDA%3D"
                },
                  new GroceryItem{
                  //Id =  27,
                  Name= "Lettuce",
                  Protein= 14,
                  GroceryItemTypeId= 2,
                  Carbs= 29,
                  Calories= 15,
                  Weight= 100,
                  Fat= 2,
                  ImageUrl="https://plus.unsplash.com/premium_photo-1678198891411-46073f3c2cdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
                  //Id =  28,
                  Name= "Cauliflower",
                  Protein= 19,
                  GroceryItemTypeId= 2,
                  Carbs= 49,
                  Calories= 25,
                  Weight= 100,
                  Fat= 3,
                  ImageUrl="https://images.unsplash.com/photo-1613743990305-736d763f3d70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D"
                },
                  new GroceryItem{
                  //Id =  29,
                  Name= "Zucchini",
                  Protein= 1,
                  GroceryItemTypeId= 2,
                  Carbs= 3,
                  Calories= 17,
                  Weight= 100,
                  Fat= 0,
                  ImageUrl="https://images.unsplash.com/photo-1580294672675-91afc00ee7b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D"
                },
                  new GroceryItem{
                  //Id =  30,
                  Name= "Kale",
                  Protein= 4,
                  GroceryItemTypeId= 2,
                  Carbs= 10,
                  Calories= 50,
                  Weight= 100,
                  Fat= 0,
                  ImageUrl="https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FsZXxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
                  //Id =  31,
                  Name= "Artichoke",
                  Protein= 3,
                  GroceryItemTypeId= 2,
                  Carbs= 14,
                  Calories= 47,
                  Weight= 100,
                  Fat= 0,
                  ImageUrl="https://images.unsplash.com/photo-1551465222-21f38590e0ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXJ0aWNob2tlfGVufDB8fDB8fHww"
                },
                  new GroceryItem{
                  //Id =  32,
                  Name= "Beetroot",
                  Protein= 1,
                  GroceryItemTypeId= 2,
                  Carbs= 10,
                  Calories= 43,
                  Weight= 100,
                  Fat= 0,
                  ImageUrl="https://images.unsplash.com/photo-1503623758111-863eb2abd7a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVldHJvb3R8ZW58MHx8MHx8fDA%3D"
                },
                  new GroceryItem{
                  //Id =  33,
                  Name= "Radish",
                  Protein= 1,
                  GroceryItemTypeId= 2,
                  Carbs= 4,
                  Calories= 16,
                  Weight= 100,
                  Fat= 0,
                  ImageUrl="https://images.unsplash.com/photo-1656232507287-0a168a01957a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmFkZGlzaHxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
                  //Id =  34,
                  Name= "Asparagus",
                  Protein= 2,
                  GroceryItemTypeId= 2,
                  Carbs= 3,
                  Calories= 20,
                  Weight= 100,
                  Fat= 0,
                  ImageUrl="https://images.unsplash.com/photo-1629875235163-2e52306e4018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNwYXJhZ3VzfGVufDB8fDB8fHww"
                },
                  new GroceryItem{
                  //Id =  35,
                  Name= "Brussels Sprouts",
                  Protein= 4,
                  GroceryItemTypeId= 2,
                  Carbs= 9,
                  Calories= 43,
                  Weight= 100,
                  Fat= 0,
                  ImageUrl="https://images.unsplash.com/photo-1614087434853-25e6e8357217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJ1c3NlbCUyMHNwcm91dHN8ZW58MHx8MHx8fDA%3D"
                },
                  new GroceryItem{
                  //Id =  36,
                  Name= "Cabbage",
                  Protein= 1,
                  GroceryItemTypeId= 2,
                  Carbs= 6,
                  Calories= 25,
                  Weight= 100,
                  Fat= 0,
                  ImageUrl="https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D"
                },
                  new GroceryItem{
                  //Id =  37,
                  Name= "Celery",
                  Protein= 0,
                  GroceryItemTypeId= 2,
                  Carbs= 3,
                  Calories= 16,
                  Weight= 100,
                  Fat= 0,
                  ImageUrl="https://images.unsplash.com/photo-1580391564590-aeca65c5e2d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2VsZXJ5fGVufDB8fDB8fHww"
                },
                  new GroceryItem{
                  //Id =  38,
                  Name= "Eggplant",
                  Protein= 1,
                  GroceryItemTypeId= 2,
                  Carbs= 6,
                  Calories= 25,
                  Weight= 100,
                  Fat= 0,
                  ImageUrl="https://images.unsplash.com/photo-1615484477201-9f4953340fab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdncGxhbnR8ZW58MHx8MHx8fDA%3D"
                },
                  new GroceryItem{
                //Id =  39,
                Name= "Chicken Breast",
                Protein= 31,
                GroceryItemTypeId= 3,
                Carbs= 0,
                Calories= 165,
                Weight= 100,
                Fat= 3,
                ImageUrl="https://images.unsplash.com/photo-1633096013004-e2cb4023b560?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D"
              },
                new GroceryItem{
                //Id =  40,
                Name= "Ground Beef (90% Lean)",
                Protein= 27,
                GroceryItemTypeId= 3,
                Carbs= 0,
                Calories= 250,
                Weight= 100,
                Fat= 10,
                ImageUrl="https://plus.unsplash.com/premium_photo-1668616817140-bc9385635319?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdyb3VuZCUyMGJlZWZ8ZW58MHx8MHx8fDA%3D"
              },
                new GroceryItem{
                //Id =  41,
                Name= "Salmon Fillet",
                Protein= 20,
                GroceryItemTypeId= 3,
                Carbs= 0,
                Calories= 206,
                Weight= 100,
                Fat= 13,
                ImageUrl="https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2FsbW9uJTIwRmlsbGV0fGVufDB8fDB8fHww"
              },
                new GroceryItem{
                //Id =  42,
                Name= "Pork Chop",
                Protein= 24,
                GroceryItemTypeId= 3,
                Carbs= 0,
                Calories= 193,
                Weight= 100,
                Fat= 11,
                ImageUrl="https://images.unsplash.com/photo-1597398230884-35763d59ed15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UG9yayUyMENob3B8ZW58MHx8MHx8fDA%3D"
              },
                new GroceryItem{
                //Id =  43,
                Name= "Turkey Breast",
                Protein= 29,
                GroceryItemTypeId= 3,
                Carbs= 0,
                Calories= 135,
                Weight= 100,
                Fat= 1,
                ImageUrl="https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVya2V5JTIwYnJlYXN0fGVufDB8fDB8fHww"
              },
                new GroceryItem{
                //Id =  44,
                Name= "Lamb Chop",
                Protein= 25,
                GroceryItemTypeId= 3,
                Carbs= 0,
                Calories= 258,
                Weight= 100,
                Fat= 15,
                ImageUrl="https://images.unsplash.com/photo-1606677661991-446cea8ee182?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYiUyMHNob3B8ZW58MHx8MHx8fDA%3D"
              },
                new GroceryItem{
                //Id =  45,
                Name= "Tuna Steak",
                Protein= 29,
                GroceryItemTypeId= 3,
                Carbs= 0,
                Calories= 144,
                Weight= 100,
                Fat= 1,
                ImageUrl="https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHVuYSUyMHN0ZWFrfGVufDB8fDB8fHww"
              },
                new GroceryItem{
                //Id =  46,
                Name= "Shrimp",
                Protein= 24,
                GroceryItemTypeId= 3,
                Carbs= 1,
                Calories= 99,
                Weight= 100,
                Fat= 1,
                ImageUrl="https://images.unsplash.com/photo-1548587468-971ebe4c8c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hyaW1wfGVufDB8fDB8fHww"
              },
                new GroceryItem{
                //Id =  47,
                Name= "Venison Steak",
                Protein= 30,
                GroceryItemTypeId= 3,
                Carbs= 0,
                Calories= 158,
                Weight= 100,
                Fat= 4,
                ImageUrl="https://images.unsplash.com/photo-1597417175478-c161c1788242?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVuaXNvbiUyMHN0ZWFrfGVufDB8fDB8fHww"
              },
                new GroceryItem{
                //Id =  48,
                Name= "Duck Breast",
                Protein= 30,
                GroceryItemTypeId= 3,
                Carbs= 0,
                Calories= 337,
                Weight= 100,
                Fat= 30,
                ImageUrl="https://images.unsplash.com/photo-1580554530778-ca36943938b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVjayUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D"
              },
                new GroceryItem{
              //Id =  49,
              Name = "Quinoa",
              Protein = 4,
              GroceryItemTypeId = 4,
              Carbs = 21,
              Calories = 120,
              Weight = 100,
              Fat = 2,
              ImageUrl="https://plus.unsplash.com/premium_photo-1705003211073-353df1ce520a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHF1aW5vYXxlbnwwfHwwfHx8MA%3D%3D"
            },
              new GroceryItem{
              //Id =  50,
              Name = "Brown Rice",
              Protein = 2,
              GroceryItemTypeId = 4,
              Carbs = 23,
              Calories = 111,
              Weight = 100,
              Fat = 1,
              ImageUrl="https://plus.unsplash.com/premium_photo-1671130295823-78f170465794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyb3duJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D"
            },
              new GroceryItem{
              //Id =  51,
              Name = "Barley",
              Protein = 3,
              GroceryItemTypeId = 4,
              Carbs = 28,
              Calories = 123,
              Weight = 100,
              Fat = 1,
              ImageUrl="https://images.unsplash.com/photo-1534621735346-1de48541fa12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmFybGV5fGVufDB8fDB8fHww"
            },
              new GroceryItem{
              //Id =  52,
              Name = "Whole Wheat Pasta",
              Protein = 12,
              GroceryItemTypeId = 4,
              Carbs = 25,
              Calories = 124,
              Weight = 100,
              Fat = 1,
              ImageUrl="https://plus.unsplash.com/premium_photo-1705404738237-20c799dcfe49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2hvbGUlMjBXaGVhdCUyMFBhc3RhfGVufDB8fDB8fHww"
            },
              new GroceryItem{
              //Id =  53,
              Name = "Buckwheat",
              Protein = 13,
              GroceryItemTypeId = 4,
              Carbs = 20,
              Calories = 343,
              Weight = 100,
              Fat = 3,
              ImageUrl="https://images.unsplash.com/photo-1613758235306-69cc0a3f614d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVja3doZWF0fGVufDB8fDB8fHww"
            },
              new GroceryItem{
              //Id =  54,
              Name = "Millet",
              Protein = 11,
              GroceryItemTypeId = 4,
              Carbs = 22,
              Calories = 378,
              Weight = 100,
              Fat = 4,
              ImageUrl="https://plus.unsplash.com/premium_photo-1675237626370-caf08f2b9966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWlsbGV0fGVufDB8fDB8fHww"
            },
              new GroceryItem{
              //Id =  55,
              Name = "Spelt",
              Protein = 15,
              GroceryItemTypeId = 4,
              Carbs = 28,
              Calories = 338,
              Weight = 100,
              Fat = 2,
              ImageUrl="https://images.unsplash.com/photo-1656918828529-345b77bb06e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BlbHR8ZW58MHx8MHx8fDA%3D"
            },
              new GroceryItem{
              //Id =  56,
              Name = "Oats",
              Protein = 17,
              GroceryItemTypeId = 4,
              Carbs = 66,
              Calories = 389,
              Weight = 100,
              Fat = 6,
              ImageUrl="https://images.unsplash.com/photo-1614373532018-92a75430a0da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T2F0c3xlbnwwfHwwfHx8MA%3D%3D"
            },
              new GroceryItem{
              //Id =  57,
              Name = "Amaranth",
              Protein = 14,
              GroceryItemTypeId = 4,
              Carbs = 28,
              Calories = 371,
              Weight = 100,
              Fat = 7,
              ImageUrl="https://images.unsplash.com/photo-1586201375799-47cd24c3f595?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
              new GroceryItem{
              //Id =  58,
              Name = "Farro",
              Protein = 14,
              GroceryItemTypeId = 4,
              Carbs = 28,
              Calories = 337,
              Weight = 100,
              Fat = 2,
              ImageUrl="https://www.jessicagavin.com/wp-content/uploads/2017/10/uncooked-farro-1200.jpg"
            },
              new GroceryItem{
              //Id =  59,
              Name = "Coke",
              Protein = 0,
              GroceryItemTypeId = 5,
              Carbs = 39,
              Calories = 140,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29rZXxlbnwwfHwwfHx8MA%3D%3D"
            },
              new GroceryItem{
              //Id =  60,
              Name = "Coffee (Black)",
              Protein = 0,
              GroceryItemTypeId = 5,
              Carbs = 0,
              Calories = 2,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
            },
              new GroceryItem{
              //Id =  61,
              Name = "Green Tea",
              Protein = 0,
              GroceryItemTypeId = 5,
              Carbs = 0,
              Calories = 1,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1606441393961-bb2331b77d55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyZWVuJTIwdGVhfGVufDB8fDB8fHww"
            },
              new GroceryItem{
              //Id =  62,
              Name = "Orange Juice",
              Protein = 1,
              GroceryItemTypeId = 5,
              Carbs = 9,
              Calories = 45,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1577680716097-9a565ddc2007?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D"
            },
              new GroceryItem{
              //Id =  63,
              Name = "Milk",
              Protein = 3,
              GroceryItemTypeId = 5,
              Carbs = 5,
              Calories = 42,
              Weight = 100,
              Fat = 1,
              ImageUrl="https://images.unsplash.com/photo-1600788907416-456578634209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlsa3xlbnwwfHwwfHx8MA%3D%3D"
            },
              new GroceryItem{
              //Id =  64,
              Name = "Sports Drink",
              Protein = 0,
              GroceryItemTypeId = 5,
              Carbs = 6,
              Calories = 29,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1625865019554-220ea80ea813?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2F0b3JhZGV8ZW58MHx8MHx8fDA%3D"
            },
              new GroceryItem{
              //Id =  65,
              Name = "Coconut Water",
              Protein = 0,
              GroceryItemTypeId = 5,
              Carbs = 4,
              Calories = 19,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1518484157348-2cd88dc70d1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29jb251dCUyMHdhdGVyfGVufDB8fDB8fHww"
            },
              new GroceryItem{
              //Id =  66,
              Name = "Almond Milk",
              Protein = 1,
              GroceryItemTypeId = 5,
              Carbs = 2,
              Calories = 17,
              Weight = 100,
              Fat = 1,
              ImageUrl="https://images.unsplash.com/photo-1601436423474-51738541c1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxtb25kJTIwbWlsa3xlbnwwfHwwfHx8MA%3D%3D"
            },
              new GroceryItem{
              //Id =  67,
              Name = "Lemonade",
              Protein = 0,
              GroceryItemTypeId = 5,
              Carbs = 10,
              Calories = 44,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://plus.unsplash.com/premium_photo-1664391804722-cb3f2d439d7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TGVtb25hZGV8ZW58MHx8MHx8fDA%3D"
            },
              new GroceryItem{
              //Id =  68,
              Name = "Iced Tea (Sweetened)",
              Protein = 0,
              GroceryItemTypeId = 5,
              Carbs = 11,
              Calories = 43,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlZCUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D"
            },
              new GroceryItem{
              //Id =  70,
              Name = "Beer",
              Protein = 1,
              GroceryItemTypeId = 6,
              Carbs = 13,
              Calories = 154,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVlcnxlbnwwfHwwfHx8MA%3D%3D"
            },
              new GroceryItem{
              //Id =  71,
              Name = "Wine (Red)",
              Protein = 0,
              GroceryItemTypeId = 6,
              Carbs = 4,
              Calories = 125,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2luZXxlbnwwfHwwfHx8MA%3D%3D"
            },
              new GroceryItem{
              //Id =  72,
              Name = "Whiskey",
              Protein = 0,
              GroceryItemTypeId = 6,
              Carbs = 0,
              Calories = 97,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1546540749-3229ce1f48da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdoaXNrZXl8ZW58MHx8MHx8fDA%3D"
            },
              new GroceryItem{
              //Id =  73,
              Name = "Vodka",
              Protein = 0,
              GroceryItemTypeId = 6,
              Carbs = 0,
              Calories = 231,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1539606494565-02e568638d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Vm9ka2F8ZW58MHx8MHx8fDA%3D"
            },
              new GroceryItem{
              //Id =  74,
              Name = "Rum",
              Protein = 0,
              GroceryItemTypeId = 6,
              Carbs = 0,
              Calories = 231,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cnVtfGVufDB8fDB8fHww"
            },
              new GroceryItem{
              //Id =  75,
              Name = "Tequila",
              Protein = 0,
              GroceryItemTypeId = 6,
              Carbs = 0,
              Calories = 231,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1529671434436-8fbb37410056?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVxdWlsYXxlbnwwfHwwfHx8MA%3D%3D"
            },
              new GroceryItem{
              //Id =  76,
              Name = "Gin",
              Protein = 0,
              GroceryItemTypeId = 6,
              Carbs = 0,
              Calories = 231,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R2lufGVufDB8fDB8fHww"
            },
              new GroceryItem{
              //Id =  77,
              Name = "Brandy",
              Protein = 0,
              GroceryItemTypeId = 6,
              Carbs = 0,
              Calories = 231,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://plus.unsplash.com/premium_photo-1661416364996-f865fcf5c290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnJhbmR5fGVufDB8fDB8fHww"
            },
              new GroceryItem{
              //Id =  78,
              Name = "Cognac",
              Protein = 0,
              GroceryItemTypeId = 6,
              Carbs = 0,
              Calories = 231,
              Weight = 100,
              Fat = 0,
              ImageUrl="https://images.unsplash.com/photo-1602984156862-14b9ee0885c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29nbmFjfGVufDB8fDB8fHww"
            },
              new GroceryItem{
            //Id =  79,
            Name = "Almonds",
            Protein = 21,
            GroceryItemTypeId = 7,
            Carbs = 22,
            Calories = 579,
            Weight = 100,
            Fat = 49,
            ImageUrl="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxtb25kc3xlbnwwfHwwfHx8MA%3D%3D"
          },
            new GroceryItem{
            //Id =  80,
            Name = "Peanuts",
            Protein = 25,
            GroceryItemTypeId = 7,
            Carbs = 16,
            Calories = 567,
            Weight = 100,
            Fat = 49,
            ImageUrl="https://images.unsplash.com/photo-1549978113-29eb25c8177f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVhbnV0c3xlbnwwfHwwfHx8MA%3D%3D"
          },
            new GroceryItem{
            //Id =  81,
            Name = "Walnuts",
            Protein = 15,
            GroceryItemTypeId = 7,
            Carbs = 14,
            Calories = 654,
            Weight = 100,
            Fat = 65,
            ImageUrl="https://images.unsplash.com/photo-1524593000379-d4729b2c4f99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbnV0c3xlbnwwfHwwfHx8MA%3D%3D"
          },
            new GroceryItem{
            //Id =  82,
            Name = "Cashews",
            Protein = 18,
            GroceryItemTypeId = 7,
            Carbs = 30,
            Calories = 553,
            Weight = 100,
            Fat = 44,
            ImageUrl="https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FzaGV3c3xlbnwwfHwwfHx8MA%3D%3D"
          },
            new GroceryItem{
            //Id =  83,
            Name = "Pecans",
            Protein = 9,
            GroceryItemTypeId = 7,
            Carbs = 14,
            Calories = 691,
            Weight = 100,
            Fat = 72,
            ImageUrl="https://images.unsplash.com/photo-1582173649515-0f9582d58e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVjYW5zfGVufDB8fDB8fHww"
          },
            new GroceryItem{
            //Id =  84,
            Name = "Hazelnuts",
            Protein = 15,
            GroceryItemTypeId = 7,
            Carbs = 17,
            Calories = 628,
            Weight = 100,
            Fat = 61,
            ImageUrl="https://plus.unsplash.com/premium_photo-1668508855065-9402b77ffd67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF6ZWxudXRzfGVufDB8fDB8fHww"
          },
            new GroceryItem{
            //Id =  85,
            Name = "Brazil Nuts",
            Protein = 14,
            GroceryItemTypeId = 7,
            Carbs = 12,
            Calories = 656,
            Weight = 100,
            Fat = 66,
            ImageUrl="https://images.unsplash.com/photo-1614807618553-35332e4de00d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJhemlsJTIwbnV0c3xlbnwwfHwwfHx8MA%3D%3D"
          },
            new GroceryItem{
            //Id =  86,
            Name = "Macadamia Nuts",
            Protein = 8,
            GroceryItemTypeId = 7,
            Carbs = 14,
            Calories = 718,
            Weight = 100,
            Fat = 76,
            ImageUrl="https://images.unsplash.com/photo-1579293675541-10fcb3725a19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYWRhbWlhJTIwbnV0c3xlbnwwfHwwfHx8MA%3D%3D"
          },
            new GroceryItem{
            //Id =  87,
            Name = "Pine Nuts",
            Protein = 13,
            GroceryItemTypeId = 7,
            Carbs = 14,
            Calories = 673,
            Weight = 100,
            Fat = 68,
            ImageUrl="https://images.unsplash.com/photo-1483915705094-ab1fe57ada9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGluZSUyMG51dHN8ZW58MHx8MHx8fDA%3D"
          },
            new GroceryItem{
            //Id =  88,
            Name = "Pistachios",
            Protein = 21,
            GroceryItemTypeId = 7,
            Carbs = 28,
            Calories = 562,
            Weight = 100,
            Fat = 45,
            ImageUrl="https://images.unsplash.com/photo-1615485925933-379c8b6ad03c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGlzdGFjaGlvc3xlbnwwfHwwfHx8MA%3D%3D"
          },
            new GroceryItem{
            //Id =  89,
            Name = "Olive Oil",
            Protein = 0,
            GroceryItemTypeId = 8,
            Carbs = 0,
            Calories = 884,
            Weight = 100,
            Fat = 100,
            ImageUrl="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xpdmUlMjBvaWx8ZW58MHx8MHx8fDA%3D"
          },
            new GroceryItem{
            //Id =  90,
            Name = "Coconut Oil",
            Protein = 0,
            GroceryItemTypeId = 8,
            Carbs = 0,
            Calories = 862,
            Weight = 100,
            Fat = 100,
            ImageUrl="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
          },
            new GroceryItem{
            //Id =  91,
            Name = "Canola Oil",
            Protein = 0,
            GroceryItemTypeId = 8,
            Carbs = 0,
            Calories = 884,
            Weight = 100,
            Fat = 100,
            ImageUrl="https://images.unsplash.com/photo-1552592074-ea7a91b851b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbm9sYSUyMG9pbHxlbnwwfHwwfHx8MA%3D%3D"
          },
            new GroceryItem{
            //Id =  92,
            Name = "Sesame Oil",
            Protein = 0,
            GroceryItemTypeId = 8,
            Carbs = 0,
            Calories = 884,
            Weight = 100,
            Fat = 100,
            ImageUrl="https://images.unsplash.com/photo-1523071290596-8ad02685dcc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VzYW1lJTIwb2lsfGVufDB8fDB8fHww"
          },
            new GroceryItem{
            //Id =  93,
            Name = "Avocado Oil",
            Protein = 0,
            GroceryItemTypeId = 8,
            Carbs = 0,
            Calories = 884,
            Weight = 100,
            Fat = 100,
            ImageUrl="https://images.unsplash.com/photo-1581264176930-2b8ab40dc90b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2b2NhZG8lMjBvaWx8ZW58MHx8MHx8fDA%3D"
          },
            new GroceryItem{
            //Id =  94,
            Name = "Lentils",
            Protein = 9,
            GroceryItemTypeId = 9,
            Carbs = 20,
            Calories = 116,
            Weight = 100,
            Fat = 0,
            ImageUrl="https://images.unsplash.com/photo-1614373532201-c40b993f0013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVudGlsc3xlbnwwfHwwfHx8MA%3D%3D"
          },
            new GroceryItem{
            //Id =  95,
            Name = "Chickpeas",
            Protein = 9,
            GroceryItemTypeId = 9,
            Carbs = 27,
            Calories = 164,
            Weight = 100,
            Fat = 3,
            ImageUrl="https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2twZWFzfGVufDB8fDB8fHww"
          },
            new GroceryItem{
            //Id =  96,
            Name = "Black Beans",
            Protein = 8,
            GroceryItemTypeId = 9,
            Carbs = 63,
            Calories = 339,
            Weight = 100,
            Fat = 1,
            ImageUrl="https://plus.unsplash.com/premium_photo-1675237625091-e40de414b510?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBiZWFuc3xlbnwwfHwwfHx8MA%3D%3D"
          },
            new GroceryItem{
            //Id =  97,
            Name = "Kidney Beans",
            Protein = 9,
            GroceryItemTypeId = 9,
            Carbs = 22,
            Calories = 127,
            Weight = 100,
            Fat = 0,
            ImageUrl="https://plus.unsplash.com/premium_photo-1671130295242-582789bd9861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkbmV5JTIwYmVhbnN8ZW58MHx8MHx8fDA%3D"
          },
            new GroceryItem{
            //Id =  98,
            Name = "Split Peas",
            Protein = 9,
            GroceryItemTypeId = 9,
            Carbs = 63,
            Calories = 341,
            Weight = 100,
            Fat = 1,
            ImageUrl="https://plus.unsplash.com/premium_photo-1664007711018-d7cb92e664b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BsaXQlMjBwZWFzfGVufDB8fDB8fHww"
          },
            new GroceryItem{
            //Id =  99,
            Name = "Green Peas",
            Protein = 5,
            GroceryItemTypeId = 9,
            Carbs = 14,
            Calories = 81,
            Weight = 100,
            Fat = 0,
            ImageUrl="https://images.unsplash.com/photo-1592394533824-9440e5d68530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JlZW4lMjBQZWFzfGVufDB8fDB8fHww"
          },
            new GroceryItem{
            //Id =  100,
            Name = "Soybeans",
            Protein = 36,
            GroceryItemTypeId = 9,
            Carbs = 30,
            Calories = 446,
            Weight = 100,
            Fat = 20,
            ImageUrl="https://images.unsplash.com/photo-1639843606783-b2f9c50a7468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U295YmVhbnN8ZW58MHx8MHx8fDA%3D"
          },
            new GroceryItem{
            //Id =  101,
            Name = "Cannellini Beans",
            Protein = 9,
            GroceryItemTypeId = 9,
            Carbs = 20,
            Calories = 127,
            Weight = 100,
            Fat = 0,
            ImageUrl="https://plus.unsplash.com/premium_photo-1664527307810-63c15cb57346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FubmVsbGluaSUyMEJlYW5zfGVufDB8fDB8fHww"
          },
            new GroceryItem{
            //Id =  102,
            Name = "Pinto Beans",
            Protein = 9,
            GroceryItemTypeId = 9,
            Carbs = 22,
            Calories = 123,
            Weight = 100,
            Fat = 0,
            ImageUrl="https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGludG8lMjBCZWFuc3xlbnwwfHwwfHx8MA%3D%3D"
          },
            new GroceryItem{
            //Id =  103,
            Name = "Black-Eyed Peas",
            Protein = 9,
            GroceryItemTypeId = 9,
            Carbs = 24,
            Calories = 134,
            Weight = 100,
            Fat = 0,
            ImageUrl="https://plus.unsplash.com/premium_photo-1670135170974-5352088c8ade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBleWVkJTIwcGVhc3xlbnwwfHwwfHx8MA%3D%3D"
          }
              };

      var random = new Random();
      foreach (var g in item){
        //populate quantity with a random value from 1 to 10        
        g.Quantity = random.Next(1, 10);
      }      

      await context.GroceryItem.AddRangeAsync(item);//item);
      await context.SaveChangesAsync();

    }
  }
}