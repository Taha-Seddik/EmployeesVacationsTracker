using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace EmployeesVacationTracker.Server.Extensions;

public static class ConfigureServices
{
    public static void ConfigureServerServices(this IServiceCollection services)
    {
    }

    //private static void ConfigureAuth(IServiceCollection services, JwtTokenConfig jwtTokenConfig)
    //{
    //    // Auth stuff - JWT
    //    services.AddAuthentication(options =>
    //    {
    //        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    //        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    //        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    //    })
    //    .AddJwtBearer(options =>
    //    {
    //        options.SaveToken = true;
    //        options.RequireHttpsMetadata = true;
    //        options.TokenValidationParameters = new TokenValidationParameters
    //        {
    //            ValidateIssuer = true,
    //            ValidIssuer = jwtTokenConfig.Issuer,
    //            ValidateIssuerSigningKey = true,
    //            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtTokenConfig.Secret)),
    //            ValidAudience = jwtTokenConfig.Audience,
    //            ValidateAudience = true,
    //            ValidateLifetime = true,
    //            ClockSkew = TimeSpan.FromMinutes(1)
    //        };
    //    });
    //}
}