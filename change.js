function OnLinkClick(num){
  switch(num){
      case 0:
        document.getElementById('home').style.display="block";
        document.getElementById('about').style.display="none";
	    document.getElementById('project').style.display="none";
        document.getElementById('research').style.display="none";
        break;
        
      case 1:
        document.getElementById('home').style.display="none";
        document.getElementById('about').style.display="block";
	    document.getElementById('project').style.display="none";
        document.getElementById('research').style.display="none";
        break;
        
      case 2:
        document.getElementById('home').style.display="none";
        document.getElementById('about').style.display="none";
	    document.getElementById('project').style.display="block";
        document.getElementById('research').style.display="none";
        break;
        
      case 3:
        document.getElementById('home').style.display="none";
        document.getElementById('about').style.display="none";
	    document.getElementById('project').style.display="none";
        document.getElementById('research').style.display="block";
        break;
      
      case 10:
        $('#kurione_movie1').prepend('<iframe class="embed-responsive-item" src="img/project/mixed-and-analysis.mp4"></iframe>');
        break;
        
      case 11:
        $('#othello_movie').prepend('<iframe class="embed-responsive-item" src="img/project/java_movie.mp4"></iframe>');
        break;
  }
}