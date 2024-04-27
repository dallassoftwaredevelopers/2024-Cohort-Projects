const dummy_data = {
    recipe1: {
      route_id: "xyz123",
      name: "Meatballs",
      image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/2/0/WU0207H_comfort-meatballs_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1382545263210.jpeg",
      prep_time: 15,
      cook_time: 60,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec faucibus elit augue, et semper mauris tristique ultricies.
    Suspendisse non nisl vitae mi posuere aliquet a non libero.
    In vulputate metus non erat congue, ut vehicula tellus vehicula.
    Maecenas ultricies neque vel aliquam rhoncus. Pellentesque pretium enim urna,
    quis maximus nunc aliquam et. Quisque nec eros nec nisl facilisis facilisis eget
    vel metus. Donec sagittis sem at fringilla aliquam. Nam in vehicula nisi. Aenean
    sit amet neque in ligula porta laoreet. Donec ultrices bibendum posuere. `,
      recipe_ingredients: [
        {
          name: "Ground_Beef",
          ingredient_id: "beef123",
          recipe_id: "xyz123",
          measurement: "pound",
          amount: 1.5,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "Quick_Oats",
          ingredient_id: "oats123",
          recipe_id: "xyz123",
          measurement: "cup",
          amount: 0.75,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "Whole_Milk",
          ingredient_id: "milk123",
          recipe_id: "xyz123",
          measurement: "cup",
          amount: 1,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "Minced_Onion",
          ingredient_id: "onion123",
          recipe_id: "xyz123",
          measurement: "tablespoon",
          amount: 9,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }     
        },
        {
          name: "Table_Salt",
          ingredient_id: "salt123",
          recipe_id: "xyz123",
          measurement: "tablespoon",
          amount: 1.5,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }  
        },
        {
          name: "Cannola_Oil",
          recipe_id: "xyz123",
          ingredient_id: "cannola123",
          measurement: "tablespoon",
          amount: 4,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "All_Purpose Flour",
          recipe_id: "xyz123",
          ingredient_id: "flour123",
          measurement: "cup",
          amount: 0.5,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "Ketchup",
          recipe_id: "xyz123",
          ingredient_id: "ketchup123",
          measurement: "cup",
          amount: 1,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "White_Vinegar",
          recipe_id: "xyz123",
          ingredient_id: "vinegar123",
          measurement: "tablespoon",
          amount: 3,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "sugar",
          recipe_id: "xyz123",
          ingredient_id: "sugar123",
          measurement: "tablespoon",
          amount: 2,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "worcestershire_sauce",
          recipe_id: "xyz123",
          ingredient_id: "sauce123",
          measurement: "tablespoon",
          amount: 2,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name:"tabasco_sauce",
          recipe_id: "xyz123",
          ingredient_id: "hotsauce123",
          measurement: "tablespoon",
          amount: 1,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        }
      ],
      instructions: [
        {
          step: 1,
          recipe_id: "xyz123",
          task: `For the meatballs: In bowl, combine the ground beef and oats.
          Pour in the milk, and then add 3 tablespoons of onions, salt and pepper.
          Stir to combine. Roll the mixture into tablespoon-size balls
          and refrigerate them for 30 to 45 minutes to firm.`
        },
        {
          step: 2,
          recipe_id: "xyz123",
          task: `Preheat the oven to 350 degrees F.`
        },
        {
          step: 3,
          recipe_id: "xyz123",
          task: `Heat the canola oil in a large skillet over medium heat.
          Dredge the meatballs in the flour, and then brown the meatballs in batches
          until light brown. As they brown, place them into a rectangular baking dish.`
        },
        {
          step: 4,
          recipe_id: "xyz123",
          task: `For the sauce: Stir together the ketchup, onions, vinegar, sugar,
          Worcestershire sauce and hot sauce. Drizzle the sauce evenly on the meatballs.`
        },
        {
          step: 5,
          recipe_id: "xyz123",
          task: `Bake until bubbly and hot, about 45 minutes.`
        }
      ]
    },
    
    recipe2: {
        route_id: "abc123",
        name: "Muffuletta",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/6/15/0/FNK_CAMPING-MUFFULETTA-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1497539746247.jpeg",
        prep_time: 30,
        cook_time: 0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec faucibus elit augue, et semper mauris tristique ultricies.
    Suspendisse non nisl vitae mi posuere aliquet a non libero.
    In vulputate metus non erat congue, ut vehicula tellus vehicula.
    Maecenas ultricies neque vel aliquam rhoncus. Pellentesque pretium enim urna,
    quis maximus nunc aliquam et. Quisque nec eros nec nisl facilisis facilisis eget
    vel metus. Donec sagittis sem at fringilla aliquam. Nam in vehicula nisi. Aenean
    sit amet neque in ligula porta laoreet. Donec ultrices bibendum posuere. `,
        
    recipe_ingredients: [
        {
          name: "Ground_Beef",
          ingredient_id: "beef123",
          recipe_id: "xyz123",
          measurement: "pound",
          amount: 1.5,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "Quick_Oats",
          ingredient_id: "oats123",
          recipe_id: "xyz123",
          measurement: "cup",
          amount: 0.75,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "Whole_Milk",
          ingredient_id: "milk123",
          recipe_id: "xyz123",
          measurement: "cup",
          amount: 1,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "Minced_Onion",
          ingredient_id: "onion123",
          recipe_id: "xyz123",
          measurement: "tablespoon",
          amount: 9,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }     
        },
        {
          name: "Table_Salt",
          ingredient_id: "salt123",
          recipe_id: "xyz123",
          measurement: "tablespoon",
          amount: 1.5,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }  
        },
        {
          name: "Cannola_Oil",
          recipe_id: "xyz123",
          ingredient_id: "cannola123",
          measurement: "tablespoon",
          amount: 4,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "All_Purpose Flour",
          recipe_id: "xyz123",
          ingredient_id: "flour123",
          measurement: "cup",
          amount: 0.5,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "Ketchup",
          recipe_id: "xyz123",
          ingredient_id: "ketchup123",
          measurement: "cup",
          amount: 1,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "White_Vinegar",
          recipe_id: "xyz123",
          ingredient_id: "vinegar123",
          measurement: "tablespoon",
          amount: 3,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "sugar",
          recipe_id: "xyz123",
          ingredient_id: "sugar123",
          measurement: "tablespoon",
          amount: 2,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name: "worcestershire_sauce",
          recipe_id: "xyz123",
          ingredient_id: "sauce123",
          measurement: "tablespoon",
          amount: 2,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        },
        {
          name:"tabasco_sauce",
          recipe_id: "xyz123",
          ingredient_id: "hotsauce123",
          measurement: "tablespoon",
          amount: 1,
          nutrients: {
            calories: 100,
            vitamin_A: 10,
            vitamin_B: 10,
            vitamin_C: 10,
            cholesterol: 10,
            carbohydrates: 10,
            protein: 10,
            total_fat: 10,
            total_saturated_fats: 10,
            total_trans_fats: 10,
            total_monosaturated_fats: 10
          }
        }
      ],
    instructions: [
        {
          step: 1,
          recipe_id: "xyz123",
          task: `For the meatballs: In bowl, combine the ground beef and oats.
          Pour in the milk, and then add 3 tablespoons of onions, salt and pepper.
          Stir to combine. Roll the mixture into tablespoon-size balls
          and refrigerate them for 30 to 45 minutes to firm.`
        },
        {
          step: 2,
          recipe_id: "xyz123",
          task: `Preheat the oven to 350 degrees F.`
        },
        {
          step: 3,
          recipe_id: "xyz123",
          task: `Heat the canola oil in a large skillet over medium heat.
          Dredge the meatballs in the flour, and then brown the meatballs in batches
          until light brown. As they brown, place them into a rectangular baking dish.`
        },
        {
          step: 4,
          recipe_id: "xyz123",
          task: `For the sauce: Stir together the ketchup, onions, vinegar, sugar,
          Worcestershire sauce and hot sauce. Drizzle the sauce evenly on the meatballs.`
        },
        {
          step: 5,
          recipe_id: "xyz123",
          task: `Bake until bubbly and hot, about 45 minutes.`
        }
      ]
    },

    recipe3: {
        route_id: "mvp123",
        name: "Roast Pork Tenderloins",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/10/16/4/tm1b27_pork_tenderloins3.jpg.rend.hgtvcom.1280.720.suffix/1431255253080.jpeg",
        prep_time: 10,
        cook_time: 20,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec faucibus elit augue, et semper mauris tristique ultricies.
        Suspendisse non nisl vitae mi posuere aliquet a non libero.
        In vulputate metus non erat congue, ut vehicula tellus vehicula.
        Maecenas ultricies neque vel aliquam rhoncus. Pellentesque pretium enim urna,
        quis maximus nunc aliquam et. Quisque nec eros nec nisl facilisis facilisis eget
        vel metus. Donec sagittis sem at fringilla aliquam. Nam in vehicula nisi. Aenean
        sit amet neque in ligula porta laoreet. Donec ultrices bibendum posuere. `,
            
        recipe_ingredients: [
            {
              name: "Ground_Beef",
              ingredient_id: "beef123",
              recipe_id: "xyz123",
              measurement: "pound",
              amount: 1.5,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }
            },
            {
              name: "Quick_Oats",
              ingredient_id: "oats123",
              recipe_id: "xyz123",
              measurement: "cup",
              amount: 0.75,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }
            },
            {
              name: "Whole_Milk",
              ingredient_id: "milk123",
              recipe_id: "xyz123",
              measurement: "cup",
              amount: 1,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }
            },
            {
              name: "Minced_Onion",
              ingredient_id: "onion123",
              recipe_id: "xyz123",
              measurement: "tablespoon",
              amount: 9,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }     
            },
            {
              name: "Table_Salt",
              ingredient_id: "salt123",
              recipe_id: "xyz123",
              measurement: "tablespoon",
              amount: 1.5,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }  
            },
            {
              name: "Cannola_Oil",
              recipe_id: "xyz123",
              ingredient_id: "cannola123",
              measurement: "tablespoon",
              amount: 4,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }
            },
            {
              name: "All_Purpose Flour",
              recipe_id: "xyz123",
              ingredient_id: "flour123",
              measurement: "cup",
              amount: 0.5,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }
            },
            {
              name: "Ketchup",
              recipe_id: "xyz123",
              ingredient_id: "ketchup123",
              measurement: "cup",
              amount: 1,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }
            },
            {
              name: "White_Vinegar",
              recipe_id: "xyz123",
              ingredient_id: "vinegar123",
              measurement: "tablespoon",
              amount: 3,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }
            },
            {
              name: "sugar",
              recipe_id: "xyz123",
              ingredient_id: "sugar123",
              measurement: "tablespoon",
              amount: 2,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }
            },
            {
              name: "worcestershire_sauce",
              recipe_id: "xyz123",
              ingredient_id: "sauce123",
              measurement: "tablespoon",
              amount: 2,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }
            },
            {
              name:"tabasco_sauce",
              recipe_id: "xyz123",
              ingredient_id: "hotsauce123",
              measurement: "tablespoon",
              amount: 1,
              nutrients: {
                calories: 100,
                vitamin_A: 10,
                vitamin_B: 10,
                vitamin_C: 10,
                cholesterol: 10,
                carbohydrates: 10,
                protein: 10,
                total_fat: 10,
                total_saturated_fats: 10,
                total_trans_fats: 10,
                total_monosaturated_fats: 10
              }
            }
          ],
        instructions: [
            {
              step: 1,
              recipe_id: "xyz123",
              task: `For the meatballs: In bowl, combine the ground beef and oats.
              Pour in the milk, and then add 3 tablespoons of onions, salt and pepper.
              Stir to combine. Roll the mixture into tablespoon-size balls
              and refrigerate them for 30 to 45 minutes to firm.`
            },
            {
              step: 2,
              recipe_id: "xyz123",
              task: `Preheat the oven to 350 degrees F.`
            },
            {
              step: 3,
              recipe_id: "xyz123",
              task: `Heat the canola oil in a large skillet over medium heat.
              Dredge the meatballs in the flour, and then brown the meatballs in batches
              until light brown. As they brown, place them into a rectangular baking dish.`
            },
            {
              step: 4,
              recipe_id: "xyz123",
              task: `For the sauce: Stir together the ketchup, onions, vinegar, sugar,
              Worcestershire sauce and hot sauce. Drizzle the sauce evenly on the meatballs.`
            },
            {
              step: 5,
              recipe_id: "xyz123",
              task: `Bake until bubbly and hot, about 45 minutes.`
            }
          ]
    }
  }

export default dummy_data;