var circleFns  = {
	area: function() {
		return Math.PI * this.radius * this.radius;
	},
	grow: function() {
		this.radius++;
	},
	shrink: function() {
		this.radius--;
	}
};

function extend(destination, source) {
	for( var k in source ){
		if(source.hasOwnProperty(k)) {
			destination[k] = source[k];
		}
	}
	return destination;
}

var RoundButton = function (radius) {
	this.radius = radius;
};

/* extend(RoundButton.prototype, circleFns); */


RoundButton.prototype = circleFns;

/* console.log(RoundButton.prototype.area); */

var rButton = new RoundButton(5);

/* console.log(circleFns.area); */

console.log(rButton.area());


circleFns.area = function() {
  return Math.PI * this.radius * this.radius * this.radius;
}

/* console.log(RoundButton.area); */

var rButton2 = new RoundButton(5);

/* console.log(circleFns.area); */

console.log(rButton2.area());

/* console.log(RoundButton.prototype.area); */

/* note  
...the previous area function object loses a reference. 
Any objects that still referenced circle.area will keep that same reference,
but circle itself will now have a different reference, to the new function.

This is what happens with assignment and is standard behaviour in JavaScript.

In example we could get the desired behaviour by not copying circle's properties to the RoundButton.prototype object (with extend),
but to assign circle to that prototype. 
That way mutations of the circle object will directly affect the prototype (since they are the same object reference)
*/

