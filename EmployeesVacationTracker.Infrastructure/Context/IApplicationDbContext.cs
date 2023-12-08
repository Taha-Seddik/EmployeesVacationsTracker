
using EmployeesVacationTracker.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeesVacationTracker.Infrastructure.Context
{
    public interface IApplicationDbContext
    {
        DbSet<Employee> Employees { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
