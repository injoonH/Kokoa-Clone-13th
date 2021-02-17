const profileImgs = document.getElementsByClassName("friends-tile__img");

Array.from(profileImgs).forEach((element) => {
    element.addEventListener("click", (evt) => {
        evt.stopPropagation();
        const name = evt.target.parentElement.getElementsByClassName(
            "friends-tile__name"
        )[0].innerText;
        window.open(
            `../Kokoa-Clone-13th/profiles/profile-${name.toLowerCase()}.html`,
            `Profile | ${name}`,
            "width=450, height=680"
        );
    });
});
