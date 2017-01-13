//function to get choice of user
function getSelected(){
  var choice = document.getElementById("checkbox").value;
  operations(choice);
}


//function to handle operations
function operations(roomType){
	if(roomType in rooms){
		return rooms[roomType]
	}
	else{
		return "Invalid Room type"
	}
}