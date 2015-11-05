//The MIT License (MIT)

//Copyright (c) 2015 maheshjasti

function updateLiveStatusBoardScore(xLiveDetailsAttrValue,score){
	var liveMsgElement = $('div.live-score[x-live-details=' + xLiveDetailsAttrValue + "]");''
	var currentValWithComma = '';
	var valSlices = liveMsgElement.find('span');
	$.each(valSlices,function(i,val){
		currentValWithComma += $(this).html();		
	});
	var currentVal = currentValWithComma.replace(/,/g,'');
	var scoreWithComma = getNumberWithCommas(score);
	var newScoreHtml = '';
	if(currentVal.length==score.length){
		var cvArray = currentValWithComma.split('');
		var scArray = scoreWithComma.split('');
				
		$.each(scArray,function(i,val){
			if(val != cvArray[i]){
				newScoreHtml+='<span class="do-live-board-score-effect">'+val+'</span>';				
			}	
			else{
				newScoreHtml+='<span>'+val+'</span>';
			}			
		});
	}
	else{
		var scArray = scoreWithComma.split('');
				
		$.each(scArray,function(i,val){
				newScoreHtml+='<span class="do-live-board-score-effect">'+val+'</span>';
		});		
	}	
	liveMsgElement.html(newScoreHtml);
	doLiveBoardScoreEffect();	
}

function doLiveBoardScoreEffect(){
	var effectSpeed = 300;
	var elementsSelectedForEffect = $('span.do-live-board-score-effect');
	  
	  var rndm=Math.floor((Math.random() * 100) + 1)%2;
	  $.each(elementsSelectedForEffect,function(i,val){		  
		  var singleElement = $(this);
	    singleElement.fadeOut(effectSpeed*rndm,function(){
		singleElement.fadeIn(effectSpeed*rndm);});
	rndm++;
	});
	elementsSelectedForEffect.removeClass();
}	


function getNumberWithCommas(score) {
    var parts = score.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


function updateLiveStatusBoardMessage(xLiveDetailsAttrValue,msg,newClass){
	var liveMsgElement = $('div.live-msg[x-live-details=' + xLiveDetailsAttrValue + "]");
	
	liveMsgElement.fadeOut(1000, function() {
    liveMsgElement.html(msg);
	
	liveMsgElement.removeClass();	
	liveMsgElement.addClass('live-msg');
	if(newClass != undefined && newClass.length>0)
	liveMsgElement.addClass(newClass);
    
	liveMsgElement.fadeIn(1200);
});
	
}
