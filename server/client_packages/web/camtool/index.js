function start(){
	var start = [$('#startx').val(),$('#starty').val(),$('#startz').val()];
	var end = [$('#endx').val(),$('#endy').val(),$('#endz').val()];
    mp.gui.chat.push(start[0]);  // Не выводит
    console.log(start[0]); // Выводит
    mp.trigger('camtool:cords', start, end);
}