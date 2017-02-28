document.getElementById("account").addEventListener("click", toggle_sidebar_menus, event);
document.getElementById("queue").addEventListener("click", toggle_sidebar_menus, event);
document.getElementById("item3").addEventListener("click", toggle_sidebar_menus, event);



window.onload = function ()
{



} 

function toggle_sidebar_menus(event) {

	
	var x = document.getElementById(event.target.id);
	var xUl = document.getElementById(x.id + "Ul");

	if (x.className !== 'active') {
		var y = document.getElementsByClassName('active');
		
		var yUl = document.getElementById(y[0].id + "Ul");
		yUl.className = 'invisible';
		xUl.className = '';
		y[0].className = 'inactive';
		
		
		x.className = 'active';


	}
	
}




function toggle_sidebar() {
     var x = document.getElementById('sidebar-header');
     var y = document.getElementById('sidebar');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    if (y.style.display === 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }	


}
