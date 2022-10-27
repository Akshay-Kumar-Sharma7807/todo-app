console.log('im worker')


onmessage = (e) => {
    console.log(e.data)

    const todos = e.data;

    todos.map((todo, i) => {
        let now = new Date();
        const checkDate = now.getDate();
        const checkMonth = now.getMonth();
        const checkYear = now.getFullYear();



        // console.log(todo.dueDate)
        let dd = new Date(todo?.dueDate?.seconds * 1000);
        // console.log(dd, dd?.getDate());
        if (dd) {
            if (now.getDate() === dd.getDate() && now.getMonth() == dd.getMonth() && now.getFullYear() == dd.getFullYear()) {
                // console.log("date matched", todo);
                todo.index = i;
                console.log(todo.notified)
                if (!todo.notified) {
                    postMessage(todo)
                }
            }

        }

    })


}