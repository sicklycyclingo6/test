
var i = document.querySelector(".brand");
// var lis = document.querySelector(".mouseover");

i.addEventListener("click",function () {
	// body...
	alert("Want to change background!!!");
	document.body.classList.toggle("background");
});

$(".mouseEnter").on("mouseenter",function(){
	$(this).fadeOut(400,function(){
	$(this).removeClass("glyphicon glyphicon-envelope")
	$(this).fadeIn(400)
		$(this).text("E-mail")
		$(this).css("font-weight","bold");
		$(this).css("font-size","15px");
		$(this).css("color","rgba(115, 255, 227,1)");
		// });
	});
});
$(".mouseEnter").on("mouseleave",function(){
	$(this).fadeOut(400,function(){
	$(this).text("");
	$(this).fadeIn(400);		
	$(this).addClass("glyphicon glyphicon-envelope");
	$(this).css("font-weight","normal");
	$(this).css("font-size","1em");
	$(this).css("color","white");
	});
});

$(".mouseEnter1").on("mouseenter",function(){
	$(this).fadeOut(400,function(){
	$(this).removeClass("glyphicon glyphicon-earphone");
	$(this).fadeIn(400);
	$(this).text("Contact");
	$(this).css("font-weight","bold");
	$(this).css("font-size","15px");
	$(this).css("color","rgba(115, 255, 227,1)");

	});
});
$(".mouseEnter1").on("mouseleave",function(){
	$(this).fadeOut(400,function(){
	$(this).text("");
	$(this).fadeIn(400);
	$(this).addClass("glyphicon glyphicon-earphone");
	$(this).css("font-weight","normal");
	$(this).css("font-size","1em");
	$(this).css("color","white");

	});
});

const imgs = document.querySelectorAll('.thumbnail');

// for (let img of imgs){
// 	img.addEventListener('mouseenter', function(){
// 		$(this).addClass("glyphicon glyphicon-headphones");
// 		// console.log("Clicked!!!");
// 	})
// }

for (let img of imgs){
	img.addEventListener('mouseleave', function(){
		$(this).removeClass("glyphicon glyphicon-headphones");
		// console.log("Clicked!!!");
	})
}

// const plybtn = document.querySelectorAll('.glyphicon-headphones');
// plybtn.addEventListener('click', function(){
// 	console.log('clicked plybtn!!!');
// })





