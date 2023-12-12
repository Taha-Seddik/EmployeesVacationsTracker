using EmployeesVacationTracker.Application.Common.Interfaces;
using EmployeesVacationTracker.DomainLayer.Entities;
using EmployeesVacationTracker.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace EmployeesVacationTracker.Infrastructure.Repositories
{
    public class EmployeesRepository : GenericRepository<Employee>, IEmployeesRepository
    {
        public EmployeesRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Employee>> ListAllWithUserFilled(CancellationToken cancellationToken)
        {
            return await _context.Employees.AsNoTracking().Include(x => x.User).ToListAsync();
        }

        public async Task<Employee?> GetOneWithUserFilled(int empId, CancellationToken cancellationToken)
        {
            return await _context.Employees.Where(x => x.Id == empId).Include(x => x.User).FirstOrDefaultAsync(cancellationToken);
        }

    }
}
