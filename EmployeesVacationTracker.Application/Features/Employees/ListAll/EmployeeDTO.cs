using EmployeesVacationTracker.Domain.Entities;

namespace EmployeesVacationTracker.Application.Features.Employees.ListAll
{
    public class EmployeeDTO
    {
        public string JobTitle { get; set; }
        public EmployeeDepartment Department { get; set; }
        public DateTimeOffset JoiningDate { get; set; }
    }
}
