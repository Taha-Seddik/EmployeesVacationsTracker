using EmployeesVacationTracker.Domain.Entities;
using EmployeesVacationTracker.Infrastructure.Context;
using Microsoft.AspNetCore.Identity;

namespace EmployeesVacationTracker.Server.Extensions;

public static class ConfigureServices
{
    public static void ConfigureServerServices(this IServiceCollection services)
    {
        ConfigureIdentity(services);
    }

    private static void ConfigureIdentity(IServiceCollection services)
    {
        services.AddIdentity<ApplicationUser, IdentityRole>(options =>
        {
            options.Password.RequireDigit = true;
            options.Password.RequiredLength = 8;
            options.Password.RequiredUniqueChars = 1;
            options.Password.RequireLowercase = false;
            options.Password.RequireNonAlphanumeric = false;
            options.Password.RequireUppercase = false;
        })
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();
    }
}