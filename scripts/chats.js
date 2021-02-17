const friendsTiles = document.getElementsByClassName("friends-tile");

Array.from(friendsTiles).forEach((element) => {
    element.addEventListener("click", (evt) => {
        const name = evt.target.getElementsByClassName("friends-tile__name")[0]
            .innerText;
        window.open(
            `../Kokoa-Clone-13th/chats/chat-${name.toLowerCase()}.html`,
            `Chat | ${name}`,
            "width=450, height=680"
        );
    });
});
