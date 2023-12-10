using EmployeesVacationTracker.Server.Extensions;
using EmployeesVacationTracker.Application;
using EmployeesVacationTracker.Infrastructure;
using EmployeesVacationTracker.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// configure Application services 
builder.Services.RegisterApplicationLayerServices(builder.Configuration);

// configure infrastructure services
builder.Services.ConfigureInfrastructure(builder.Configuration);

// configure server services
builder.Services.ConfigureServerServices();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// auth config
app.UseAuthentication();
app.UseAuthorization();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Run migrations on start
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<ApplicationDbContext>();
    context.Database.Migrate();
}

app.MapFallbackToFile("/index.html");

app.Run();
