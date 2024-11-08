# Employee-Registry

React App visualizing hierarchical organisational structure

# Task requirements

Task Overview: You’ll build a small React app visualising a hierarchical organisational structure. Specifically, you’ll take an array of employee objects, each with a name, role, and manager, and display them in a clear, nested structure that allows for adding and removing employees. This task is intended to be brief and should take no longer than 30 minutes.

# What am I being asked to do ?

-Create an application with the ability to add and delete employees.The application should show who their managers are,basic structure of the organisation from employee to manager
The low level employees should be nested within the high level employees

# What actions must be perfomed ?

-Display employees
-Add employee
-Delete employee

# What variables do I have and what outputs do I need?

-a nested with nested objects
-const employees = []
-const employee = {name:string, role: string, manager: string, id:number}
-const manager = {name: string, role: string, id: number directReports: {...employee}}

# functions

const removeEmployee() :
takes in an id, employee to be removed
returns array - minus employee
nice to have (alert: employee removed)

const addEmployee():
-generates id:
-returns employees array + new employee
-nice to have (alert: employee added)

const displayEmployees()

# What do I know how to do?

-map through objects
-add items to an array
-remove items from an array
-useState, useEffect

# Edge Cases?

-User should not be able to add employee values if input fields are empty
-Disable add employee button

# What else do I need?

-input fields to add employee
-form to submit employee data
-demo data

# What am I not sure about?
