using EmployeesVacationTracker.Application.Features.Employees.Create;
using EmployeesVacationTracker.Application.Features.Employees.Delete;
using EmployeesVacationTracker.Application.Features.Employees.ListAll;
using EmployeesVacationTracker.Application.Features.Employees.Update;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EmployeesVacationTracker.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeesController : ControllerBase
{
    private readonly IMediator _mediator;

    public EmployeesController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    public async Task<IActionResult> GetAsync()
    {
        var response = await _mediator.Send(new ListAllEmployeesQuery());
        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> CreateEmployee(CreateEmployeeCommand payload)
    {
        var newlyCreatedEmployeeId = await _mediator.Send(payload);
        return Ok(newlyCreatedEmployeeId);
    }

    [HttpPut]
    public async Task<IActionResult> UpdateEmployee(UpdateEmployeeCommand payload)
    {
        await _mediator.Send(payload);
        return Ok();
    }

    [HttpDelete("{employeeId}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<IActionResult> DeleteEmployee([FromRoute] int employeeId)
    {
        var payload = new DeleteEmployeeCommand()
        {
            EmployeeId = employeeId
        };
        await _mediator.Send(payload);
        return Ok();
    }
}
