using EmployeesVacationTracker.DomainLayer.Entities;

namespace EmployeesVacationTracker.Application.Common.Interfaces
{
    public interface IEmployeesRepository : IGenericRepository<Employee>
    {
        Task<IEnumerable<Employee>> ListAllWithUserFilled(CancellationToken cancellationToken);
        Task<Employee?> GetOneWithUserFilled(int empId, CancellationToken cancellationToken);

    }
}
