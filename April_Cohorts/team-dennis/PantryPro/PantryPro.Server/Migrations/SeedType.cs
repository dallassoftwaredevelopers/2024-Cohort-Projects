
using PantryPro.Server;
using PantryPro.Server.DataBase;


namespace Persistence
{
    public class SeedType
    {
        public static async Task SeedData(PantryProAppContext context)
        {
            if (context.GroceryItemType.Any()) return;

            var itemType = new List<GroceryItemType>
            {
                new GroceryItemType
                {          
                    Description = "Fruit",
                },
                new GroceryItemType
                {
                    Description = "Vegetable(s)",
                },
                new GroceryItemType
                {
                    Description = "Meat",
                },
                new GroceryItemType
                {
                    Description = "Whole grains",
                },
                new GroceryItemType
                {
                    Description = "Beverage",
                },
                new GroceryItemType
                {
                    Description = "Alcohol",
                },
                new GroceryItemType
                {
                    Description = "Nuts",
                },
                new GroceryItemType
                {
                    Description = "Oils",
                },
                new GroceryItemType
                {
                    Description = "Legumes",
                },
                new GroceryItemType
                {
                    Description = "Snacks",
                },
            };

            await context.GroceryItemType.AddRangeAsync(itemType);
            await context.SaveChangesAsync();
        }
    }
}