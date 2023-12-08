﻿using EmployeesVacationTracker.Domain.Common;

namespace EmployeesVacationTracker.Domain.Entities
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
        public int UserId { get; set; }


    }
}
