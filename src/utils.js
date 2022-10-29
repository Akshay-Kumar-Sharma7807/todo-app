export function getLaterToday() {
    const now = new Date();

    if (now.getHours() > 21) {
        return null
    }
    now.setHours(now.getHours() + 3)
    return { date: now, string: "Later Today" };
}

export function getTomorrow() {
    const now = new Date();
    now.setDate(now.getDate() + 1)
    now.setHours(9, 0, 0)
    return { date: now, string: "Tomorrow" }
}

export function getNextWeek() {
    const now = new Date();
    now.setDate(now.getDate() + 7);
    now.setHours(9, 0, 0);
    return { date: now, string: "Next Week" };
}