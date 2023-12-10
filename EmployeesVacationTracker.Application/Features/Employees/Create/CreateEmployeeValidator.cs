using EmployeesVacationTracker.Application.Common.Interfaces;
using FluentValidation;

namespace EmployeesVacationTracker.Application.Features.Employees.Create;

public class CreateChocolateBarCommandValidator : AbstractValidator<CreateEmployeeCommand>
{

    public CreateChocolateBarCommandValidator()
    {
        RuleFor(v => v.JobTitle)
            .NotEmpty().WithMessage("JobTitle is required.")
            .MaximumLength(80).WithMessage("JobTitle must not exceed 80 characters.");

        RuleFor(v => v.Department)
           .NotNull().WithMessage("Department is required.")
           .IsInEnum().WithName("EmployeeDepartment").WithMessage("Please provide a valid Department.");

        RuleFor(v => v.JoiningDate)
          .NotNull().WithMessage("JoiningDate is required.");

        RuleFor(v => v.UserId)
         .NotNull().WithMessage("FactoryId is required.");
          //.MustAsync(FactoryShouldExists).WithMessage("The specified factory should exists.");
    }

}


//public async Task<bool> BeUniqueUserId(string newChocolateName, CancellationToken cancellationToken)
//{
//   @TODO
//   return await _usersRepo.get(newChocolateName, cancellationToken);
//}