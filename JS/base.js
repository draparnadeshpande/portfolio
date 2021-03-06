function DisplayBio(bio) {
    var short = document.getElementById('bioshort');
    var long = document.getElementById('biolong');
    var research = document.getElementById('bioresearch');
    var outreach = document.getElementById('biooutreach');
    var group = document.getElementById('biogroup');
    var citations = document.getElementById('biocitations');
    var teaching = document.getElementById('bioteaching');


    long.style.display = 'none';
    short.style.display = 'none';
    research.style.display = 'none';
    outreach.style.display = 'none';
    group.style.display = 'none';
    citations.style.display = 'none';
    teaching.style.display = 'none';

    switch(bio)
    {
        case 'long':
            long.style.display = 'block';
            break;

        case 'short':
            short.style.display = 'block';
            break;

        case 'research':
            research.style.display = 'block';
            break;

        case 'outreach':
            outreach.style.display = 'block';
            break;

        case 'group':
            group.style.display = 'block';
            break;

        case 'citations':
            citations.style.display = 'block';
            break;
            
        case 'teaching':
        teaching.style.display = 'block';
        break;
    }
}

function ToggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
