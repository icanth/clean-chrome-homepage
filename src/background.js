
// http://www.w3school.com.cn/jsref/dom_obj_all.asp

//var most_visited_elem = document.getElementById("most-visited")
//if(most_visited_elem) {
//	most_visited_elem.parentNode.removeChild(most_visited_elem)
//}
//var f_elem = document.getElementById("f")
//if(f_elem) {
//	f_elem.parentNode.removeChild(f_elem)	
//}

var nodes = document.body.childNodes
if(nodes) {
	for (var i = 0; i < nodes.length; i++) {
		document.body.removeChild(nodes[i])
	};
}
