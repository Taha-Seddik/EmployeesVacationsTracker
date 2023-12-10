using EmployeesVacationTracker.Application.Common.Interfaces;
using EmployeesVacationTracker.DomainLayer.Entities;
using EmployeesVacationTracker.Infrastructure.Context;

namespace EmployeesVacationTracker.Infrastructure.Repositories
{
    public class EmployeesRepository : GenericRepository<Employee>, IEmployeesRepository
    {
        public EmployeesRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
