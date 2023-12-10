using EmployeesVacationTracker.DomainLayer.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace EmployeesVacationTracker.Infrastructure.Context;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>, IApplicationDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Employee> Employees { get; set; }

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        return await base.SaveChangesAsync(cancellationToken);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Seed();

        base.OnModelCreating(modelBuilder);

        // Configure Employee/ApplicationUser one-to-one relationship
        modelBuilder.Entity<ApplicationUser>()
            .HasOne(u => u.Employee)
            .WithOne(p => p.User)
            .HasForeignKey<Employee>(p => p.UserId);
    }

}
