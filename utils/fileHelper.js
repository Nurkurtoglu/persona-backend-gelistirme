const fs = require('fs').promises;
const path = require('path');

const tasksPath = path.join(__dirname, '../data/tasks.json');
const employeesPath = path.join(__dirname, '../data/employees.json');

const readTasks = async () => {
  try {
    const data = await fs.readFile(tasksPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeTasks = async (tasks) => {
   await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2))
}

const readEmployees = async() => {
    try {
        const data = await fs.readFile(employeesPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return []
    }
}

const writeEmployees = async (employees) => {
    await fs.writeFile(employeesPath, JSON.stringify(employees, null, 2))
}
module.exports = {
    readTasks,
    writeTasks,
    readEmployees,
    writeEmployees
}