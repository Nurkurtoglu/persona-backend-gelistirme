const { v4: uuidv4 } = require('uuid');

const { readTasks, writeTasks, readEmployees } = require('../utils/fileHelper');

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await readTasks();
        res.status(200).json({ success: true, data: tasks })
    } catch (error) {
        next(error);
    }
}

const getTaskById = async (req, res, next) => {
    try {
        const tasks = await readTasks();
        const taskdIdExist = tasks.find(t => t.id === req.params.id)

        if (!taskdIdExist) {
            return res.status(404).json({
                success: false,
                message: "Aradığınız id'ye ait veri bulunamamaktadır."
            })
        }
        res.status(200).json({ success: true, data: taskdIdExist })
    } catch (error) {
        next(error);
    }
}
const createTask = async (req, res, next) => {
    try {
        const { title, description, priority, assigneeId } = req.body;

        if (assigneeId) {
            const employees = await readEmployees()
            const employeeExists = employees.find(e => e.id === assigneeId);

            if (!employeeExists) {
                return res.status(404).json({
                    success: false,
                    message: "Atama başarısız! Sistemde böyle bir çalışan bulunamadı."
                })
            }
        }

        const tasks = await readTasks();

        const newTask = {
            id: uuidv4(),
            title,
            description: description || "",
            status: "todo",
            priority: priority || "medium",
            createdAt: new Date().toISOString()
        };

        tasks.push(newTask);
        await writeTasks(tasks);

        res.status(201).json({ success: true, data: newTask });

    } catch (error) {
        next(error)
    }
}

const updateTask = async (req, res, next) => {
    try {
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(t => t.id === req.params.id)

        if (taskIndex === -1) {
            return res.status(404).json({ success: false, message: "Güncellenecek görev bulunamadı." });
        }

        const updatedTask = {
            ...tasks[taskIndex],
            ...req.body,
            updatedAt: new Date().toISOString()
        }
        tasks[taskIndex] = updatedTask;
        await writeTasks(tasks)
        res.status(200).json({ success: true, data: updatedTask });

    } catch (error) {
        next(error);
    }

}

const deleteTask = async (req, res, next) => {
    try {
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(t => t.id === req.params.id);

        if (taskIndex === -1) {
            return res.status(404).json({ success: false, message: "Silinecek görev bulunamadı." });
        }

        tasks.splice(taskIndex, 1);
        await writeTasks(tasks);

        res.status(200).json({ success: true, message: "Görev başarıyla silindi." });

    } catch (error) {
        next(error)
    }
}



module.exports = {
    getAllTasks, getTaskById, createTask, updateTask, deleteTask
};