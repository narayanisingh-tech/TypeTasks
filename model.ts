
// 1. TaskStatus union type
type TaskStatus = "todo" | "in-progress" | "done";

// 2. Task interface
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// 3. Add a new task
function addTask(tasks: Task[], title: string): Task[] {
  const newId = Math.max(0, ...tasks.map(task => task.id)) + 1;

  const newTask: Task = {
    id: newId,
    title: title,
    status: "todo"
  };

  return [...tasks, newTask];
}

// 4. Complete a task
function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map(task =>
    task.id === id
      ? { ...task, status: "done" }
      : task
  );
}

// 5. Filter tasks by status
function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter(task => task.status === status);
}

// 6. Extra operation: Delete a task
function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter(task => task.id !== id);
}
