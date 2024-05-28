const taskList = [
  "laundry",
  "take out the bin",
  "call boss",
  "buy groceries",
  "clean the house",
  "pay bills",
  "attend meeting",
  "workout",
  "read a book",
  "water plants",
  "cook dinner",
  "walk the dog",
  "reply to emails",
  "plan the week",
  "therapy",
  "mow the lawn",
  "wash the car",
  "organize closet",
  "study for exam",
  "practice guitar",
  "practice coding"
];

function getRandomTasks() {
  const numberOfTasks = Math.floor(Math.random() * 21);
  const tasks = new Set();
  while (tasks.size < numberOfTasks) {
    const randomTask = taskList[Math.floor(Math.random() * taskList.length)];
    tasks.add(randomTask);
  }
  return Array.from(tasks);
}

export const data = [
  { date: "2024-06-01", tasks: getRandomTasks() },
  { date: "2024-06-02", tasks: getRandomTasks() },
  { date: "2024-06-03", tasks: getRandomTasks() },
  { date: "2024-06-04", tasks: getRandomTasks() },
  { date: "2024-06-05", tasks: getRandomTasks() },
  { date: "2024-06-06", tasks: getRandomTasks() },
  { date: "2024-06-07", tasks: getRandomTasks() },
  { date: "2024-06-08", tasks: getRandomTasks() },
  { date: "2024-06-09", tasks: getRandomTasks() },
  { date: "2024-06-10", tasks: getRandomTasks() },
  { date: "2024-06-11", tasks: getRandomTasks() },
  { date: "2024-06-12", tasks: getRandomTasks() },
  { date: "2024-06-13", tasks: getRandomTasks() },
  { date: "2024-06-14", tasks: getRandomTasks() },
  { date: "2024-06-15", tasks: getRandomTasks() },
  { date: "2024-06-16", tasks: getRandomTasks() },
  { date: "2024-06-17", tasks: getRandomTasks() },
  { date: "2024-06-18", tasks: getRandomTasks() },
  { date: "2024-06-19", tasks: getRandomTasks() },
  { date: "2024-06-20", tasks: getRandomTasks() },
  { date: "2024-06-21", tasks: getRandomTasks() },
  { date: "2024-06-22", tasks: getRandomTasks() },
  { date: "2024-06-23", tasks: getRandomTasks() },
  { date: "2024-06-24", tasks: getRandomTasks() },
  { date: "2024-06-25", tasks: getRandomTasks() },
  { date: "2024-06-26", tasks: getRandomTasks() },
  { date: "2024-06-27", tasks: getRandomTasks() },
  { date: "2024-06-28", tasks: getRandomTasks() },
  { date: "2024-06-29", tasks: getRandomTasks() },
  { date: "2024-06-30", tasks: getRandomTasks() },
];