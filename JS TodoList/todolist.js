// todo list

let question = prompt("What would you to do?");
while (!question) {
    question = prompt("please what would you to do???");
}

if (question === "new") {
    let list = prompt("Add a todo");
    console.log(list);
}
else if (question === "list") {

}