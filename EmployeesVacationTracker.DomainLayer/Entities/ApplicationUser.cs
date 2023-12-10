using Microsoft.AspNetCore.Identity;

namespace EmployeesVacationTracker.DomainLayer.Entities;

public class ApplicationUser : IdentityUser
{
    // Add your custom properties here
    public string FirstName { get; set; }
    public string LastName { get; set; }

    // Navigation property for employee
    public Employee Employee { get; set; }
}
