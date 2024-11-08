const data = [
  {
    name: "John Snow",
    role: "Accounts Manager",
    department: "Accounts",
    id: "JM01",
    directReports: [
      {
        name: "Jackie",
        role: "Accountant",
        department: "Accounts",
        id: "JM02",
        manager: "John Snow",
      },
      {
        name: "Sam",
        role: "Clerk",
        department: "Accounts",
        id: "JM03",
        manager: "John Snow",
      },
    ],
  },
  {
    name: "Amanda Smith",
    role: "Sales Manager",
    department: "Sales",
    id: "AM01",
    directReports: [
      {
        name: "Alex",
        id: "AM02",
        department: "Sales",
        role: "Sales rep",
        manager: "Amanda Smith",
      },
      {
        name: "Nyasha",
        role: "Sales Consultant",
        department: "Sales",
        id: "AM03",
        manager: "Amanda Smith",
      },
    ],
  },
];
export default data;
