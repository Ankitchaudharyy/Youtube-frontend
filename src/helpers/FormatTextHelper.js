
const formatVideoTitle = (title) => {
    if (title.split(" ").length > 8)
        return title.split(" ").slice(0, 8).join(" ").concat(" ...");
    else
        return title;
}

export { formatVideoTitle }


