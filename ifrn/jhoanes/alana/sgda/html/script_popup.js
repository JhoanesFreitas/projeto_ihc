var EXIT = 27;

var ENTER = 13;

function getKeyPress() {

	try{
		switch(event.keyCode){
			case EXIT:
			systemExit();
			break;
			default:
			break;
		}
	} catch(e){
		window.close();
	}

}

function systemExit(){

	try{
		window.close();
	}catch(e){
		window.close();
	}
}