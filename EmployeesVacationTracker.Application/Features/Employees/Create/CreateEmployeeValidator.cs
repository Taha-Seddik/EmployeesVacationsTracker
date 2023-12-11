using EmployeesVacationTracker.DomainLayer.Entities;
using FluentValidation;
using Microsoft.AspNetCore.Identity;

namespace EmployeesVacationTracker.Application.Features.Employees.Create;

public class CreateChocolateBarCommandValidator : AbstractValidator<CreateEmployeeCommand>
{
    private readonly UserManager<ApplicationUser> _userManager;

    public CreateChocolateBarCommandValidator(UserManager<ApplicationUser> userManager)
    {
        _userManager = userManager;

        RuleFor(model => model.Email)
           .NotEmpty().WithMessage("Email is required.")
           .MustAsync(BeUniqueEmail).WithMessage("Email Already exists!");

        RuleFor(model => model.FirstName)
           .NotEmpty().WithMessage("FirstName is required.");

        RuleFor(model => model.LastName)
           .NotEmpty().WithMessage("LastName is required.");

        RuleFor(model => model.Password)
            .NotEmpty().WithMessage("Password is required.")
            .MinimumLength(8).WithMessage("Password must be at least 8 characters.")
            .Must(ContainDigit).WithMessage("Password must contain at least one digit.");

        RuleFor(v => v.JobTitle)
            .NotEmpty().WithMessage("JobTitle is required.")
            .MaximumLength(80).WithMessage("JobTitle must not exceed 80 characters.");

        RuleFor(v => v.Department)
           .NotNull().WithMessage("Department is required.")
           .IsInEnum().WithName("EmployeeDepartment").WithMessage("Please provide a valid Department.");

        RuleFor(v => v.JoiningDate)
          .NotNull().WithMessage("JoiningDate is required.");
    }

    private bool ContainDigit(string password)
    {
        return password.Any(char.IsDigit);
    }

    public async Task<bool> BeUniqueEmail(string email, CancellationToken token)
    {
       var foundUser = await _userManager.FindByEmailAsync(email);
        return foundUser == null;
    }

}


