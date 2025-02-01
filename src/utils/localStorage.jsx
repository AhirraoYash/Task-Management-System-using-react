const admin =[  {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
]
const employees = [
      {
        "id": 1,
        "email": "user@gmail.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Prepare Report",
            "task_description": "Create a monthly sales report.",
            "task_date": "2025-02-01",
            "category": "Reports",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Client Meeting",
            "task_description": "Attend a meeting with a new client.",
            "task_date": "2025-02-02",
            "category": "Meetings",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Code Review",
            "task_description": "Review the new feature implementation.",
            "task_date": "2025-02-03",
            "category": "Development",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Bug Fixing",
            "task_description": "Fix the critical bugs reported by QA.",
            "task_date": "2025-02-04",
            "category": "Development",
            "active": false,
            "new_task": false,
            "completed": false,
            "failed": true
          },
          {
            "task_title": "Documentation",
            "task_description": "Update the project documentation.",
            "task_date": "2025-02-05",
            "category": "Documentation",
            "active": true,
            "new_task": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Database Backup",
            "task_description": "Perform a full database backup.",
            "task_date": "2025-02-06",
            "category": "Database",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Security Audit",
            "task_description": "Check for vulnerabilities in the system.",
            "task_date": "2025-02-07",
            "category": "Security",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "task_title": "Server Maintenance",
            "task_description": "Perform routine server maintenance.",
            "task_date": "2025-02-08",
            "category": "IT Support",
            "active": false,
            "new_task": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Social Media Strategy",
            "task_description": "Develop a social media marketing plan.",
            "task_date": "2025-02-09",
            "category": "Marketing",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Content Writing",
            "task_description": "Write a blog post on industry trends.",
            "task_date": "2025-02-10",
            "category": "Marketing",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Customer Support",
            "task_description": "Handle customer queries and complaints.",
            "task_date": "2025-02-11",
            "category": "Support",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "task_title": "Team Training",
            "task_description": "Conduct training for new employees.",
            "task_date": "2025-02-12",
            "category": "Training",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "task_title": "Inventory Check",
            "task_description": "Verify stock levels and reorder items.",
            "task_date": "2025-02-13",
            "category": "Operations",
            "active": false,
            "new_task": false,
            "completed": false,
            "failed": true
          }
        ]
      }
    ]
export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
        const employee=JSON.parse(localStorage.getItem('employees'))
        const admin=JSON.parse(localStorage.getItem("admin"))
        console.log(admin,employee)
        return{employees,admin}
}