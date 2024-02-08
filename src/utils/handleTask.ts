import { Task } from "../@types/models/Task"

export function validIfTaskExistInActive(active: Task[], task: Task) {
    return active.some(t => t.title === task.title)
}

export function filterActiveTasks(active: Task[], task: Task) {
    return active.filter(t => t.title !== task.title)
}

export function sortTasksByDate(tasks: Task[]): Task[] {
    return tasks.slice().sort((a, b) => {
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)
        return dateB.getTime() - dateA.getTime()
    })
}
