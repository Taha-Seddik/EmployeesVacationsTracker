using EmployeesVacationTracker.Application.Common.Interfaces;
using EmployeesVacationTracker.Infrastructure.Context;
using EmployeesVacationTracker.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace EmployeesVacationTracker.Infrastructure;

public static class ConfigureServices
{
    public static void ConfigureInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("SQLDatabase"));
        });

        services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

        services.AddScoped<IEmployeesRepository, EmployeesRepository>();
       
    }
}