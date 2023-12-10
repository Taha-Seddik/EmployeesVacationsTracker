using EmployeesVacationTracker.DomainLayer.Common;

namespace EmployeesVacationTracker.DomainLayer.Entities
{
    public enum EmployeeDepartment
    {
        Development,
        Design,
        Testing,
        HR
    }

    public class Employee : BaseEntity
    {
        public string JobTitle { get; set; }
        public EmployeeDepartment Department { get; set;}
        public DateTimeOffset JoiningDate { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
