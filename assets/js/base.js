/*
	KidJS: Base library
	Author: KidLet;
	Date: 2013-2-22;
	provide something base javascript;
*/
(function ()	// kid namespace
{

if ( !window['kid'] )	window['kid']={};

function isCompatible (other)
{
	if (  other===false 
		|| !Array.prototype.push
		|| !Object.hasOwnProperty
		|| !document.createElement
		|| !document.getElementsByTagName )
		{return false;}
	else
		return true;
}
window.kid.isCompatible = isCompatible;


function $ () 
{
	var elements = [];
	for ( var i=0; i<arguments.length; i++ )
	{
		var element = arguments[i]
		if ( typeof element=="string" )
			element = document.getElementById (element);
		if ( arguments.length==1 )	
			return element;
		elements.push (element);
	}
	return elements;
}
window.kid.$ = $;

function bind(node, eventType, bindFunction) 
{ 
	if ( !isCompatible() )	return false;
	if ( !(node=$(node)) )  return false;

	if ( node.addEventListener )
	{
		//W3C
		node.addEventListener ( eventType, bindFunction, false );
		return true;
	}
	else if ( node.attachEvent )
	{
		//IE
	  node['e'+eventType+bindFunction] = bindFunction;
     node[eventType+bindFunction] = function(){node['e'+eventType+bindFunction]( window.event );}
     node.attachEvent( 'on'+eventType, node[eventType+bindFunction] );
	}
}
window.kid.bind = bind;



(function() 				// for bind DOM  Ready
	{
		if ( !isCompatible() )	return ;
		var ready = false;

		function handler (e)
		{
			if (ready) return;
			if (e.type==="readystatechange" && document.readyState!=="complete")
				return;
			
			if ( window.kid.DOMReady )	
				for ( var i=0; i<window.kid.DOMReady.length; i++ ) 
					window.kid.DOMReady[i]();
			ready = true;
		}

		if (document.addEventListener)
		{
			document.addEventListener("DOMContentLoaded", handler, false );
			document.addEventListener("readystatechange", handler, false );
			window.addEventListener("load", handler, false );
		}
		else if (document.attachEvent)
		{
			document.attachEvent("onreadystatechange", handler );
			window.attachEvent("onload", handler );
		}

	})();


})()


kid.DOMReady = [init] ;

function init () 
{

}

function Scrolling ()		// catch the event of scroll in window
{
	var Top = document.documentElement.scrollTop || document.body.scrollTop;
	var Height = document.documentElement.clientHeight || document.body.clientHeight;
	// document.documentElement.scrollTop For IE
	if ( Top>100 )
		kid.$("return_top").style.display="block";
	else
		kid.$("return_top").style.display="block";

	if (window.ActiveXObject) 		//judge ms ie
	{
	  var ua = navigator.userAgent.toLowerCase();

	  var ie=ua.match(/msie ([\d.]+)/)[1];
		if(ie==6.0)
			kid.$("return_top").style["bottom"]=(document.documentElement.scrollHeight-Top-Height+40)+"px";
	}
}



var returnTop=(function ()
{
	var acceleration=50, v0=10;
	return function ()
	{
		if ( (document.body.scrollTop||document.documentElement.scrollTop)==0 )
		{
			v0=10;
			return false;
		}
		if (document.body.scrollTop)
			document.body.scrollTop-=v0;
		else if (document.documentElement.scrollTop)
			document.documentElement.scrollTop-=v0;
		v0+=acceleration;

		setTimeout (returnTop, 30);
		return false;
	}
})()
