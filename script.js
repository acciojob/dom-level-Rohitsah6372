//your JS code here. If required.
const targetLevel = document.getElementById("level")


function getDomainLevel(element){
	let level =0;
	while(element){
		level++;
        element = element.parentElement; // Move up the DOM tree
	}
	return level;
}

const domLevel = getDomainLevel(targetLevel);
