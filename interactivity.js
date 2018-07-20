// function showPanel(tab) {
//     console.log(document.getElementById('questionsSection'));

//     var divToBeShown = document.getElementById('questionsSection');

//     //verificam daca div to be shown are deja clasa 'dysplayed'

//     document.getElementById(tab).classList.add('panel-displayed');

//     document.getElementById(tab).classList.remove('panel-hidden');


// }

window.addEventListener("load", function() {
	var tabs = document.querySelectorAll('.links')
  console.log(tabs);
  var panels = document.querySelectorAll('.tab-pane')
  console.log(panels);
  
  for(var i = 0; i < tabs.length; i++) {
  	tabs[i].addEventListener('click', clickHandler)
  }
  
  function clickHandler(event) {
  	event.preventDefault();
  
		for(var i = 0; i < tabs.length; i++) {
  		tabs[i].classList.remove('active');
  	}
    
    var clickedTab = event.currentTarget;
  	clickedTab.classList.add('active');
    
    for(var i = 0; i < panels.length; i++) {
    	panels[i].classList.remove('active');
    }
    
    console.log( event.target);
    var activePanelId = event.target.getAttribute('href');
    document.querySelector(activePanelId).classList.add('active');
    console.log(document.querySelector(activePanelId));
    
	}
  
});








