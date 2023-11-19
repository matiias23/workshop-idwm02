using backend.Src.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Src.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    
    }
}