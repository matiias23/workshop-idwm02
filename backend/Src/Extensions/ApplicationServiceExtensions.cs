using backend.Src.Data;
using Microsoft.EntityFrameworkCore;

namespace backend.Src.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services,
        IConfiguration config)

        {
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            });

            services.AddCors();

            return services;
        }
}