
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PantryPro.Server.DataBase;




namespace PantryPro.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroceryItemController : ControllerBase
    {
        private static readonly string[] Descriptions = new[]
        {
            "Fruit", "Vegetable(s)", "Meat", "Whole grains", "Beverage", "Alcohol", "Nuts", "Oils", "Legumes"
        };

        private readonly PantryProAppContext _dbContext;
        private readonly ILogger<GroceryItemController> _logger;


        public GroceryItemController(
            PantryProAppContext dbContext,
            ILogger<GroceryItemController> logger
            )
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet(Name = "GetGroceryItems")]
        public List<GroceryItem> GetGroceryItem()
        {
            var groceryItemType = _dbContext.GroceryItem.Include("GroceryItemType");
            return groceryItemType.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<GroceryItem> GetGroceryItemById(int id)
        {
            var groceryItemId = _dbContext.GroceryItem.Find(id);
            if (groceryItemId == null)
            {
                return NotFound();
            }
            return groceryItemId;
        }

        [HttpPost]
        public ActionResult<GroceryItemPost> CreateGroceryItem([FromBody] GroceryItemPost gItemPost)
        {
            var groceryItemType = _dbContext.GroceryItemType.FirstOrDefault(gItemType => gItemType.Id == gItemPost.GroceryItemTypeId);

            if (groceryItemType == null)
            {
                return BadRequest();
            }

            var GItem = new GroceryItem
            {
                Name = gItemPost.Name,
                Description = gItemPost.Description,
                Protein = gItemPost.Protein,
                GroceryItemTypeId = gItemPost.GroceryItemTypeId,
                Carbs = gItemPost.Carbs,
                Calories = gItemPost.Calories,
                Weight = gItemPost.Weight,
                Fat = gItemPost.Fat,
                ImageUrl = gItemPost.ImageUrl,
                Quantity = gItemPost.Quantity,
            };

            _dbContext.GroceryItem.Add(GItem);
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetGroceryItemById), new { id = GItem.Id }, GItem);

        }

        [HttpPut("{id}")]

        public ActionResult<GroceryItemPut> UpdateGroceryItem(int id, [FromBody] GroceryItemPut gItemPut)
        {
            var groceryItemType = _dbContext.GroceryItemType.FirstOrDefault(gItemType => gItemType.Id == gItemPut.GroceryItemTypeId);
            var GItemId = _dbContext.GroceryItem.Find(id);
            if (GItemId == null)
            {
                return NotFound();
            }

            GItemId.Name = gItemPut.Name;
            GItemId.Description = gItemPut.Description;
            GItemId.Protein = gItemPut.Protein;
            GItemId.GroceryItemTypeId = gItemPut.GroceryItemTypeId;
            GItemId.Carbs = gItemPut.Carbs;
            GItemId.Calories = gItemPut.Calories;
            GItemId.Weight = gItemPut.Weight;
            GItemId.Fat = gItemPut.Fat;
            GItemId.ImageUrl = gItemPut.ImageUrl;
            GItemId.Quantity = gItemPut.Quantity;
            GItemId.GroceryItemType = groceryItemType;

            _dbContext.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteGroceryItem(int id)
        {
            var GItemId = _dbContext.GroceryItem.Find(id);
            if (GItemId == null)
            {
                return NotFound();
            }
            _dbContext.GroceryItem.Remove(GItemId);
            _dbContext.SaveChanges();
            return NoContent();
        }

    }
}
