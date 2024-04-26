using Microsoft.AspNetCore.Mvc;
using PantryPro.Server.DataBase;

namespace PantryPro.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroceryItemTypeController : ControllerBase
    {
        private static readonly string[] Descriptions = new[]
        {
            "Fruit", "Vegetable(s)", "Meat", "Whole grains", "Beverage", "Alcohol", "Nuts", "Oils", "Legumes"
        };

        private readonly ILogger<GroceryItemTypeController> _logger;
        private readonly PantryProAppContext _dbContext;

        public GroceryItemTypeController(
            ILogger<GroceryItemTypeController> logger,
            PantryProAppContext dbContext)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet(Name = "GetGroceryItemType")]
        public IEnumerable<GroceryItemType> GetGroceryItemTypeById()
        {
            return _dbContext.GroceryItemType.ToList();
        }

        [HttpPost]
        public ActionResult<GroceryItem> CreateGroceryItemType([FromBody] GroceryItemType groceryItemType)
        {
            _dbContext.GroceryItemType.Add(groceryItemType);
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetGroceryItemTypeById), new { id = groceryItemType.Id }, groceryItemType);
        }
    }
}
