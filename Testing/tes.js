let searchIcon = document.querySelector('.searchIcon');
        let search = document.querySelector('.search');
        let close = document.querySelector('.close');
        
        searchIcon.onclick = function() { 
            search.classList.add('active');
        } 
        close.onclick = function() {
            search.classList.remove('active');
        }