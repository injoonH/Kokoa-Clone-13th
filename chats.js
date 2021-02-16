const friendsTiles = document.getElementsByClassName("friends-tile");
console.log(Array.from(friendsTiles));

Array.from(friendsTiles).forEach((element) => {
    element.addEventListener("click", (evt) => {
        const name = evt.target.getElementsByClassName("friends-tile__name")[0]
            .innerText;
        window.open(
            `./chats/chat-${name.toLowerCase()}.html`,
            `Chat | ${name}`
        );
    });
});
