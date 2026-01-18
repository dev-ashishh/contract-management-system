
// BLUEPRINT TEMPLATES


export const demoBlueprints = [
  {
    id: "bp1",
    name: "Job Offer",
    fields: [
      { id: "jo1", type: "text", label: "Employee Name", position: 1 },
      { id: "jo2", type: "text", label: "Job Title", position: 2 },
      { id: "jo3", type: "date", label: "Joining Date", position: 3 },
      { id: "jo4", type: "text", label: "Salary", position: 4 },
      { id: "jo5", type: "signature", label: "HR Signature", position: 5 }
    ]
  },
  {
    id: "bp2",
    name: "Leave Agreement",
    fields: [
      { id: "la1", type: "text", label: "Employee Name", position: 1 },
      { id: "la2", type: "date", label: "Leave Start Date", position: 2 },
      { id: "la3", type: "date", label: "Leave End Date", position: 3 },
      { id: "la4", type: "checkbox", label: "Manager Approval", position: 4 },
      { id: "la5", type: "signature", label: "Manager Signature", position: 5 }
    ]
  },
  {
    id: "bp3",
    name: "Lease Agreement",
    fields: [
      { id: "ls1", type: "text", label: "Tenant Name", position: 1 },
      { id: "ls2", type: "text", label: "Property Address", position: 2 },
      { id: "ls3", type: "date", label: "Lease Start Date", position: 3 },
      { id: "ls4", type: "date", label: "Lease End Date", position: 4 },
      { id: "ls5", type: "signature", label: "Owner Signature", position: 5 }
    ]
  },
  {
    id: "bp4",
    name: "Loan Agreement",
    fields: [
      { id: "ln1", type: "text", label: "Borrower Name", position: 1 },
      { id: "ln2", type: "text", label: "Loan Amount", position: 2 },
      { id: "ln3", type: "date", label: "Loan Start Date", position: 3 },
      { id: "ln4", type: "date", label: "Loan End Date", position: 4 },
      { id: "ln5", type: "signature", label: "Lender Signature", position: 5 }
    ]
  },
  {
    id: "bp5",
    name: "Service Contract",
    fields: [
      { id: "sc1", type: "text", label: "Client Name", position: 1 },
      { id: "sc2", type: "text", label: "Service Description", position: 2 },
      { id: "sc3", type: "date", label: "Service Start Date", position: 3 },
      { id: "sc4", type: "date", label: "Service End Date", position: 4 },
      { id: "sc5", type: "signature", label: "Client Signature", position: 5 }
    ]
  },
  {
    id: "bp6",
    name: "Internship Agreement",
    fields: [
      { id: "in1", type: "text", label: "Intern Name", position: 1 },
      { id: "in2", type: "text", label: "College Name", position: 2 },
      { id: "in3", type: "date", label: "Internship Start Date", position: 3 },
      { id: "in4", type: "date", label: "Internship End Date", position: 4 },
      { id: "in5", type: "signature", label: "Company Signature", position: 5 }
    ]
  }
];


// DEMO CONTRACTS


export const demoContracts = [
  {
    id: "c1",
    name: "Devashish Tanti – Job Offer",
    blueprintName: "Job Offer",
    status: "CREATED",
    createdAt: "2026-01-15"
  },
  {
    id: "c2",
    name: "Vicky Kumar – Job Offer",
    blueprintName: "Job Offer",
    status: "APPROVED",
    createdAt: "2026-01-14"
  },
  {
    id: "c3",
    name: "Dev – Leave Agreement",
    blueprintName: "Leave Agreement",
    status: "SENT",
    createdAt: "2026-01-10"
  },
  {
    id: "c4",
    name: "Rishi – Internship Agreement",
    blueprintName: "Internship Agreement",
    status: "SIGNED",
    createdAt: "2026-01-12"
  },
  {
    id: "c5",
    name: "Akshay – Service Contract",
    blueprintName: "Service Contract",
    status: "LOCKED",
    createdAt: "2026-01-11"
  },
  {
    id: "c6",
    name: "Aman – Service Contract",
    blueprintName: "Service Contract",
    status: "REVOKED",
    createdAt: "2026-01-11"
  }
];
