function loadPartial(url, elemntId){
    fetch(url)
        .then(Response => Response.text())
        .then(data =>{
            document.getElementById(elemntId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el archivo: ', error);
        })
}


document.addEventListener('DOMContentLoaded', function(){
    loadPartial('partials/header.html', 'header');
    loadPartial('partials/navbar.html','navbar');
    loadPartial('/partials/sectionProfile.html','section1');
    loadPartial('/partials/sectionSkills.html','section2');
    loadPartial('/partials/sectionProjects.html','section3');

})