using EmployeesVacationTracker.DomainLayer.Entities;

namespace EmployeesVacationTracker.Application.Features.Employees.ListAll
{
    public class EmployeeDTO
    {
        public int Id { get; set; }
        public string JobTitle { get; set; }
        public EmployeeDepartment Department { get; set; }
        public DateTimeOffset JoiningDate { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }
}
