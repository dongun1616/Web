// todo list

let question = prompt("What would you to do? (Type 'quit' to quit)");
const listArray = [];
while (question !== "quit") {

    if (question === "new") {
        question = prompt("enter a todo list?");
        listArray.push(question);
        console.log(`${question} added to list`);
    }
    else if (question === "list") {
        console.log("**********")
        for (let i = 0; i < listArray.length; i++) {
            console.log(`${i} : ${listArray[i]}`);
        }
        console.log("**********")
    }
    else if (question === "delete") {
        question = parseInt(prompt("enter index of todo to delete"));
        if (!Number.isNaN(question)) {
            const deleted = listArray.splice(question, 1);
            console.log(`ok, deleted ${deleted}`);
        }
        else {
            console.log("Unknown index");
        }
    }
    question = prompt("What would you to do? (Type 'quit' to quit)");
}
if (question === "quit") {
    console.log("ok, you quit the list");
}
