//your JS code here. If required.
const targetLevel = document.getElementById("level")


function getDomainLevel(element){
	int level =0;
	while(element){
		level++;
		element = element.parentElement;
	}
	return level;
}

const domLevel = getDomainLevel(targetLevel);