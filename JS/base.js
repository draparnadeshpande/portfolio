function DisplayBio(bio) {
    var short = document.getElementById('bioshort');
    var long = document.getElementById('biolong');
    var research = document.getElementById('bioresearch');
    var outreach = document.getElementById('biooutreach');
    var group = document.getElementById('biogroup');
    var citations = document.getElementById('biocitations');
    var teaching = document.getElementById('bioteaching');
    var scienceed = document.getElementById('bioscienceed');
    var news = document.getElementById('bionews');
    var atom = document.getElementById('atom');

    long.style.display = 'none';
    short.style.display = 'none';
    research.style.display = 'none';
    outreach.style.display = 'none';
    group.style.display = 'none';
    citations.style.display = 'none';
    teaching.style.display = 'none';
    scienceed.style.display ='none';
    atom.style.display ='none';
    news.style.display='none';

    switch(bio)
    {
        case 'long':
            long.style.display = 'block';
            HighlightSelectedButton("long");
            break;

        case 'short':
            short.style.display = 'block';
            HighlightSelectedButton("short");
            break;

        case 'research':
            research.style.display = 'block';
            HighlightSelectedButton("research");
            break;

        case 'outreach':
            outreach.style.display = 'block';
            HighlightSelectedButton("outreach");
            break;

        case 'group':
            group.style.display = 'block';
            HighlightSelectedButton("group");
            break;

        case 'citations':
            citations.style.display = 'block';
            HighlightSelectedButton("citations");
            break;
            
        case 'teaching':
            teaching.style.display = 'block';
            HighlightSelectedButton("teaching");
        break;

        case 'scienceed':
            scienceed.style.display = 'block';
            HighlightSelectedButton("scienceed");
        break;

        case 'news':
            news.style.display = 'block';
            HighlightSelectedButton("news");
        break;
    }
}


function HighlightSelectedButton(button) {
    var buttons = document.getElementsByClassName('button-item');

    for (var i = 0, max = buttons.length; i < max; i++){
        buttons[i].style.background= "#fff";
        buttons[i].style.color="#000000";
        buttons[i].style.borderColor="#000000";
        buttons[i].style.textDecoration="none";
    }
    var HButton = document.getElementById(button);
    HButton.style.background= "#e0dede";
    HButton.style.borderColor="orange";
    HButton.style.color="#000";
    HButton.style.textDecoration="overline";
}

function ToggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
