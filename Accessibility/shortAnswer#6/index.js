function setEmptyHeadingsRole() {
    const headings = document.querySelectorAll('h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty');
    headings.forEach(function(heading) {
        heading.setAttribute('role', 'presentation');
    });
}

setEmptyHeadingsRole();