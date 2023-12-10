using EmployeesVacationTracker.Application.Common.Interfaces;
using EmployeesVacationTracker.Infrastructure.Context;
using EmployeesVacationTracker.Infrastructure.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using EmployeesVacationTracker.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EmployeesVacationTracker.Infrastructure;

public static class ConfigureServices
{
    public static void ConfigureInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

        services.AddScoped<IEmployeesRepository, EmployeesRepository>();

        services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("SQLDatabase"));
        });

        


        //services.AddDefaultIdentity<ApplicationUser, IdentityRole>(options =>
        //{
        //    options.Password.RequireDigit = true;
        //    options.Password.RequiredLength = 8;
        //    options.Password.RequiredUniqueChars = 1;
        //    options.Password.RequireLowercase = false;
        //    options.Password.RequireNonAlphanumeric = false;
        //    options.Password.RequireUppercase = false;
        //})
        //.AddEntityFrameworkStores<ApplicationDbContext>()
        //.AddDefaultTokenProviders();
    }


    private static void ConfigureIdentity(IServiceCollection services)
    {
        // Identity stuff 
      
    }
}