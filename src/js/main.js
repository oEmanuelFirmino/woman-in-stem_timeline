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
                resume.innerHTML = "Beginning of life";
                dinamicText.innerHTML = "Mae Carol Jemison was born in Decatur, Alabama, but grew up in Chicago, Illinois. From a young age, she showed an interest in science and was encouraged by her parents to pursue her academic dreams and goals. Jemison attended public schools in Chicago and later went to Stanford University, where she studied chemical engineering. She continued her studies at Cornell University, where she earned a medical degree.";
                attr.value = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAktBCAX8f_PnokORQKPpJ4EnIqEkmz1UDsFUMArdjz-m7WUMevYhbv9b1xrapAKniiE&usqp=CAU"
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 1:
                year.innerHTML = "1977";
                resume.innerHTML = "Academic background";
                dinamicText.innerHTML = "Mae Jemison studied chemical engineering at Stanford University and earned her degree in 1977. She continued her studies at Cornell University and earned a medical degree in 1981.";
                attr.value = ""
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 2:
                year.innerHTML = "1983"
                resume.innerHTML = "Peace Corps service"
                dinamicText.innerHTML = "After completing her studies, Jemison joined the US Peace Corps and served as a medical volunteer in Liberia and Sierra Leone from 1983 to 1985.";
                attr.value = "https://a.cdn-hotels.com/gdcs/production104/d87/607b5514-cc8b-4db2-a40b-8087b6dd9135.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 3:
                year.innerHTML = "1987"
                resume.innerHTML = "Selection by NASA"
                dinamicText.innerHTML = "In 1987, Jemison was selected by NASA for the space shuttle program, becoming the first black female astronaut of the space agency.";
                attr.value = ""
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 4:
                year.innerHTML = "1992"
                resume.innerHTML = "STS-47 Mission"
                dinamicText.innerHTML = "In September 1992, Jemison became the first African American woman to travel to space as a member of the space shuttle Endeavour crew on the STS-47 mission. During the mission, she conducted medical experiments in microgravity.";
                attr.value = "https://cdn.britannica.com/04/1804-004-1457B2DB/Atlantis-Mae-Jemison-preflight-switch-test-crew-1989.jpg?w=300"
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 5:
                year.innerHTML = "1993"
                resume.innerHTML = "Departure from NASA"
                dinamicText.innerHTML = "In 1993, Jemison left NASA to found the research and technology development company The Jemison Group, Inc. It aims to promote science and technology among youth from underrepresented groups.";
                attr.value = ""
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 6:
                year.innerHTML = "2011"
                resume.innerHTML = "Founded 100 Year Starship"
                dinamicText.innerHTML = "Foundation of the 100 Year Starship: In 2011, Jemison founded the 100 Year Starship, a non-profit organization dedicated to promoting interstellar exploration.";
                attr.value = "https://pbs.twimg.com/media/DMYlsW_VoAASRSS.jpg"
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
            case 7:
                year.innerHTML = "2023"
                resume.innerHTML = "Nowadays these days"
                dinamicText.innerHTML = "Mae Jemison is still alive today and continues to be involved in various projects related to science and education. She is a sought-after speaker and has given many speeches and presentations on topics ranging from space exploration to diversity and inclusion in science and technology. Jemison also runs The Jemison Group, a consulting company that promotes science and technology education among young people, especially those from underrepresented groups.";
                attr.value = "https://engenharia360.com/wp-content/uploads/mae-jemison-blog-da-engenharia-6.jpg"
                dinamicImage.style.display = "block";
                dinamicText.style.display = "block";
                break;
        }

    })
}

buttonChangeAttributes.forEach(logArrayinfo);