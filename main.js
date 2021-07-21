
function chooseAMuppet() {
	let month = document.getElementById('month').value;
	let day = document.getElementById('day').value;
	
	let x = document.getElementById("returnSign");
  		if (x.style.display === "block") {
    	x.style.display = "none";
  		} else {
    	x.style.display = "block";
  	}
	if (month > 12 || day > 31) {
		alert('Try a real date!');
		
	} else if (month == 1 && day >= 20 || month == 2 && day <= 18) {
		document.getElementById('signChar').innerHTML='You are Kermit!';
		document.getElementById('pic').innerHTML='<img src=kermit.jpeg>';
		document.getElementById("description").innerHTML='Kermit is the dreamer chasing the fantasy of a life charmed with rainbows and stardust. With his head in the clouds, Kermy is still the fierce protector of everyone he loves.'; 
	
	} else if (month == 2 && day >= 19 || month == 3 && day <= 20){
		document.getElementById("signChar").innerHTML="You are Miss Piggy!";
	  
	   document.getElementById('pic').innerHTML='<img src=misspiggy.jpg>';
		document.getElementById('description').innerHTML='Miss Piggy doesn’t take any guff, vocalizing both her displeasure and her triumphs with equal fervor.'
	}
	
	else if (month == 3 && day >= 21 || month == 4 && day <= 19) {
		document.getElementById('signChar').innerHTML='You are Gonzo!';
		document.getElementById('pic').innerHTML='<img src=gonzo.png>';
		document.getElementById('description').innerHTML='Gonzo is a fun-loving, fly-by-the-seat-of-his-pants Muppet who disregards patience and planning in favor of excitement and thrills.'
	}
	else if (month == 4 && day >= 20 || month == 5 && day <= 20) {
		document.getElementById('signChar').innerHTML='You are Fozzie!';
		document.getElementById('pic').innerHTML='<img src=fozzie.jpeg>';
		document.getElementById('description').innerHTML='Fozzie is friendly, loving, and sensitive, particularly in times of trial and tribulation.'
	}
	else if (month == 5 && day >= 21 || month == 6 && day <= 20) {
		document.getElementById('signChar').innerHTML='You are Sam the Eagle!';
		document.getElementById('pic').innerHTML='<img src=samEagle.jpg>';
		document.getElementById('description').innerHTML='Sam the Eagle is the Muppet representative of a studious, thoughtful person. The blue bird’s frowning countenance exudes the seriousness and stillness of a bird who has seen the world, found it lacking, and come to the conclusion that he is the only one capable of righting the world’s utter failure as a planet.';
	}
	else if (month == 6 && day >= 21 || month == 7 && day <= 22) {
		document.getElementById('signChar').innerHTML='You are Rizzo the Rat!';
		document.getElementById('pic').innerHTML='<img src=rizzo.jpeg>';
		document.getElementById('description').innerHTML='Rizzo the rat and his hordes of family members are well-known in the Muppet world for implementing every scheme that occurs to them, and usually succeeding. Rizzo doesn’t give up, but powers on with an astute, yet complicated view of the world.';
	}
	else if (month == 7 && day >= 23 || month == 8 && day <= 22) {
		document.getElementById('signChar').innerHTML='You are Rowlf!';
		document.getElementById('pic').innerHTML='<img src=rowlf.jpeg>';
		document.getElementById('description').innerHTML='Rowlf is the Muppet peacekeeper, sorting out disagreements with humor and good nature.';
	}
	else if (month == 8 && day >= 23 || month == 9 && day <= 22) {
		document.getElementById('signChar').innerHTML='You are Dr. Teeth!';
		document.getElementById('pic').innerHTML='<img src=drTeeth.jpg>';
		document.getElementById('description').innerHTML='Dr. Teeth emerges from another realm of thinking. He represents a new train of thinking, while maintaining loyalty and wisdom.';
	}
	else if (month == 9 && day >= 23 || month == 10 && day <= 22) {
		document.getElementById('signChar').innerHTML='You are Dr. Honeydew!';
		document.getElementById('pic').innerHTML='<img src=drBunsenHoneydew.jpeg>';
		document.getElementById('description').innerHTML='Dr. Honeydew cuts straight to the heart of the matter with concise logic and scientific backing.'
	}
	else if (month == 10 && day >= 23 || month == 11 && day <= 21) {
		document.getElementById('signChar').innerHTML='You are Scooter!';
		document.getElementById('pic').innerHTML='<img src=ScooterMuppet.jpg>';
		document.getElementById('description').innerHTML='Scooter is soft-spoken and considerate with a streak of genius. Representing the problem solver and logical thinker, Scooter keeps a level head while surrounded by the chaos created by his Muppet brethren.'
	}
	else if (month == 11 && day >= 22 || month == 12 && day <= 21) {
		document.getElementById('signChar').innerHTML='You are these guys!';
		document.getElementById('pic').innerHTML='<img src=statlerAndWaldorf.jpg>'
		document.getElementById('description').innerHTML='Statler and Waldorf require the world to adhere to their ideals, and if they are not obeyed, they will pepper the violators with insults veiled as jokes.'
	}
	else if (month == 12 && day >= 22 || month == 1 && day <= 19) {
		document.getElementById('signChar').innerHTML='You are Clifford!';
		document.getElementById('pic').innerHTML='<img src=clifford.jpg>';
		document.getElementById('description').innerHTML='Clifford is mellow and caring, working toward being a team player who focuses on the needs of others.'
	}
}	