using Microsoft.EntityFrameworkCore;

namespace PantryPro.Server.DataBase;

public class PantryProAppContext : DbContext
{
    public PantryProAppContext(DbContextOptions<PantryProAppContext> options)
    : base(options)
    {

    }

    public virtual DbSet<GroceryItemType> GroceryItemType { get; set; }
    public virtual DbSet<GroceryItem> GroceryItem { get; set; }
}
