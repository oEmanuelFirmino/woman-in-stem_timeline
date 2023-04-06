const buttonChangeAttributes = document.querySelectorAll(".timeline-container div img");
const headerTexts = document.querySelector(".header-texts");

const logArrayinfo = (buttonChangeAttributes, index) => {
    buttonChangeAttributes.addEventListener("click", () => {
        const headerImage = document.querySelector(".header-image");
        headerImage.setAttribute("src", buttonChangeAttributes.getAttribute("src"));

        const year = document.querySelector(".header-year_text");
        const resume = document.querySelector(".header-information_text");
        const dinamicText = document.querySelector(".dinamic-text");
        const dinamicImage = document.querySelector(".dinamic-image");
        const attr = document.createAttribute("src");
        dinamicImage.setAttributeNode(attr);

        switch (index) {
            case 0:
                year.innerHTML = "1956";
                resume.innerHTML = "a";
                dinamicText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus neque et neque condimentum egestas. Praesent ut massa libero. Nam tincidunt quam eget sem dictum pellentesque. Integer consectetur ex nisl, et condimentum lectus pulvinar non. Vivamus imperdiet cursus mauris ac dictum. Aenean iaculis dui interdum, consequat risus accumsan, sagittis neque. Etiam tincidunt sodales sollicitudin.";
                attr.value = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Decatur_Alabama_-_Tennessee_River_view.jpg/300px-Decatur_Alabama_-_Tennessee_River_view.jpg"
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 1:
                year.innerHTML = "1973";
                resume.innerHTML = "b";
                dinamicText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus neque et neque condimentum egestas.";
                attr.value = ""
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 2:
                year.innerHTML = "1977"
                resume.innerHTML = "c"
                dinamicText.innerHTML = "Suspendisse maximus neque et neque condimentum egestas. Praesent ut massa libero. Nam tincidunt quam eget sem dictum pellentesque.";
                attr.value = "https://a.cdn-hotels.com/gdcs/production104/d87/607b5514-cc8b-4db2-a40b-8087b6dd9135.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 3:
                year.innerHTML = "1987"
                resume.innerHTML = "d"
                dinamicText.innerHTML = "Vivamus imperdiet cursus mauris ac dictum. Aenean iaculis dui interdum, consequat risus accumsan, sagittis neque. Etiam tincidunt sodales sollicitudin.";
                attr.value = ""
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 4:
                year.innerHTML = "1992"
                resume.innerHTML = "e"
                dinamicText.innerHTML = "Integer consectetur ex nisl, et condimentum lectus pulvinar non. Vivamus imperdiet cursus mauris ac dictum. Aenean iaculis dui interdum, consequat risus accumsan, sagittis neque. Etiam tincidunt sodales sollicitudin.";
                attr.value = ""
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 5:
                year.innerHTML = "1993"
                resume.innerHTML = "f"
                dinamicText.innerHTML = "Suspendisse maximus neque et neque condimentum egestas. Praesent ut massa libero. Nam tincidunt quam eget sem dictum pellentesque. Integer consectetur ex nisl, et condimentum lectus pulvinar non. Vivamus imperdiet cursus mauris ac dictum. Aenean iaculis dui interdum, consequat risus accumsan, sagittis neque. Etiam tincidunt sodales sollicitudin.";
                attr.value = ""
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 6:
                year.innerHTML = "1995"
                resume.innerHTML = "g"
                dinamicText.innerHTML = "Integer consectetur ex nisl, et condimentum lectus pulvinar non. Vivamus imperdiet cursus mauris ac dictum. Aenean iaculis dui interdum, condimentum egestas. Praesent ut condimentum lectus pulvinar non";
                attr.value = ""
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 7:
                year.innerHTML = "1996"
                resume.innerHTML = "h"
                dinamicText.innerHTML = "Sed tincidunt viverra ligula vel pharetra. Fusce rutrum ex neque, sit amet tincidunt nisi tincidunt malesuada. Mauris sed blandit justo. Etiam mi velit, placerat ac metus at, maximus rutrum lectus.";
                attr.value = ""
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
        }

    })
}

buttonChangeAttributes.forEach(logArrayinfo);