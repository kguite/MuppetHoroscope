function chooseAMuppet() {
	let month = document.getElementById('month').value;
	let day = document.getElementById('day').value;
	
	if (month > 12 || day > 31) {
		alert('Try a real date!');
	} else if (month == 1 && day >= 20 || month == 2 && day <= 18) {
		document.getElementById('signChar').innerHTML='You are Kermit!';
		document.getElementById('pic').innerHTML='<img src=https://www.gannett-cdn.com/-mm-/d5e2b1d154f830ff7d8b16f13178ec1d3854aa4f/c=0-265-2589-1728/local/-/media/2017/08/30/USATODAY/USATODAY/636396561829785209-XXX-KERMIT--10-OF-10-47661325.JPG?width=2589&height=1463&fit=crop&format=pjpg&auto=webp>';
		document.getElementById("description").innerHTML='Kermit is the dreamer chasing the fantasy of a life charmed with rainbows and stardust. With his head in the clouds, Kermy is still the fierce protector of everyone he loves.'; 
	
	} else if (month == 2 && day >= 19 || month == 3 && day <= 20){
		document.getElementById("signChar").innerHTML="You are Miss Piggy!";
	  
	   document.getElementById('pic').innerHTML='<img src=https://media.glamour.com/photos/5695d48d93ef4b09520efb79/master/w_1600%2Cc_limit/fashion-2014-03-miss-piggy-1-main.jpg>';
		document.getElementById('description').innerHTML='Miss Piggy doesn’t take any guff, vocalizing both her displeasure and her triumphs with equal fervor.'
	}
	
	else if (month == 3 && day >= 21 || month == 4 && day <= 19) {
		document.getElementById('signChar').innerHTML='You are Gonzo!';
		document.getElementById('pic').innerHTML='<img src=https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F849192%252Fb32bdabd-666a-4ebb-83a5-43423be0dae4.png%252Ffull-fit-in__950x534.png?signature=dgYVGZUZzQqn8Gegr7xvSB0BPYg=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com>';
		document.getElementById('description').innerHTML='Gonzo is a fun-loving, fly-by-the-seat-of-his-pants Muppet who disregards patience and planning in favor of excitement and thrills.'
	}
	else if (month == 4 && day >= 20 || month == 5 && day <= 20) {
		document.getElementById('signChar').innerHTML='You are Fozzie!';
		document.getElementById('pic').innerHTML='<img src=https://alchetron.com/cdn/fozzie-bear-a7e265d4-c21e-49ea-a8c7-383387d7b3f-resize-750.jpeg>';
		document.getElementById('description').innerHTML='Fozzie is friendly, loving, and sensitive, particularly in times of trial and tribulation.'
	}
	else if (month == 5 && day >= 21 || month == 6 && day <= 20) {
		document.getElementById('signChar').innerHTML='You are Sam the Eagle!';
		document.getElementById('pic').innerHTML='<img src=https://i.redd.it/3lzgjw8u58x11.jpg>';
		document.getElementById('description').innerHTML='Sam the Eagle is the Muppet representative of a studious, thoughtful person. The blue bird’s frowning countenance exudes the seriousness and stillness of a bird who has seen the world, found it lacking, and come to the conclusion that he is the only one capable of righting the world’s utter failure as a planet.';
	}
	else if (month == 6 && day >= 21 || month == 7 && day <= 22) {
		document.getElementById('signChar').innerHTML='You are Rizzo the Rat!';
		document.getElementById('pic').innerHTML='<img src=https://www.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/43495/1537671280-9419-0786/Rizzo_20The_20Rat_large.jpg>';
		document.getElementById('description').innerHTML='Rizzo the rat and his hordes of family members are well-known in the Muppet world for implementing every scheme that occurs to them, and usually succeeding. Rizzo doesn’t give up, but powers on with an astute, yet complicated view of the world.';
	}
	else if (month == 7 && day >= 23 || month == 8 && day <= 22) {
		document.getElementById('signChar').innerHTML='You are Rowlf!';
		document.getElementById('pic').innerHTML='<img src=https://d23.com/app/uploads/2015/07/rowlf-the-muppets-feat-1-780x440-1440438434.png>';
		document.getElementById('description').innerHTML='Rowlf is the Muppet peacekeeper, sorting out disagreements with humor and good nature.';
	}
	else if (month == 8 && day >= 23 || month == 9 && day <= 22) {
		document.getElementById('signChar').innerHTML='You are Dr. Teeth!';
		document.getElementById('pic').innerHTML='<img src=https://static.wikia.nocookie.net/muppet/images/2/26/Dr_Teeth_pink.jpg>';
		document.getElementById('description').innerHTML='Dr. Teeth emerges from another realm of thinking. He represents a new train of thinking, while maintaining loyalty and wisdom.';
	}
	else if (month == 9 && day >= 23 || month == 10 && day <= 22) {
		document.getElementById('signChar').innerHTML='You are Dr. Honeydew!';
		document.getElementById('pic').innerHTML='<img src=https://cdn.hipwallpaper.com/i/69/55/Il1r8d.jpg>';
		document.getElementById('description').innerHTML='Dr. Honeydew cuts straight to the heart of the matter with concise logic and scientific backing.'
	}
	else if (month == 10 && day >= 23 || month == 11 && day <= 21) {
		document.getElementById('signChar').innerHTML='You are Scooter!';
		document.getElementById('pic').innerHTML='<img src=https://upload.wikimedia.org/wikipedia/en/d/df/ScooterMuppet.jpg>';
		document.getElementById('description').innerHTML='Scooter is soft-spoken and considerate with a streak of genius. Representing the problem solver and logical thinker, Scooter keeps a level head while surrounded by the chaos created by his Muppet brethren.'
	}
	else if (month == 11 && day >= 22 || month == 12 && day <= 21) {
		document.getElementById('signChar').innerHTML='You are these guys!';
		document.getElementById('pic').innerHTML='<img src=https://upload.wikimedia.org/wikipedia/en/0/02/Statler_and_Waldorf.jpg>'
		document.getElementById('description').innerHTML='Statler and Waldorf require the world to adhere to their ideals, and if they are not obeyed, they will pepper the violators with insults veiled as jokes.'
	}
	else if (month == 12 && day >= 22 || month == 1 && day <= 19) {
		document.getElementById('signChar').innerHTML='You are Clifford!';
		document.getElementById('pic').innerHTML='<img src=https://vignette.wikia.nocookie.net/muppet/images/9/92/Clifford-Photo.jpg>';
		document.getElementById('description').innerHTML='Clifford is mellow and caring, working toward being a team player who focuses on the needs of others.'
	}
	
	}