var svg = document.getElementById("svg");

//country, landmass, population
stats = [["Russia",17,142],["Canada",9.9,34],["U.S.A.",9.8,308],["China",9,1],["Brazil",3.2,192],["Australia",7.7,22],["India",3,1171],["Argentina",2.7,40],["Kazakhstan",2.7,16],["Sudan",2.5,42],["Algeria",2.3,35]] //https://flowingdata.com/2009/11/13/land-mass-and-population-by-country/

var circles = d3.select("svg").selectAll("circle").data(stats).enter();
circles.append("circle")
    .attr("cx", function(d){return (d[1]*25)+50})
    .attr("cy", function(d){return 440-(d[2]/2.75)})
    .attr("r", 10)
    .attr("fill", "lightsteelblue");

//grid
var lines = d3.select("svg").selectAll("line").data(stats).enter();
var space = 50;
while (space <= 500){
    //vertical gridlines
    lines.append("line")
	.attr("x1", space)
	.attr("y1", 0)
	.attr("x2", space)
	.attr("y2", 450)
	.attr("stroke", "grey");
    //horizontal gridlines
    lines.append("line")
	.attr("x1", 50)
	.attr("y1", space)
	.attr("x2", 500)
	.attr("y2", space)
	.attr("stroke", "grey");    
    space += 100;
};

var text = d3.select("svg").selectAll("text").data(stats).enter();
//country names
text.append("text")
    .attr("x", function(d){return d[1]*25})
    .attr("y", function(d){return 440-(d[2]/2.75)})
    .text(function(d) {return d[0];});

//x axis scale
text.append("text")
    .attr("x", function(d, i) {return i*100 + 45; })
    .attr("y", 465)
    .text(function(d,i) {return i*4;});

//y axis scale
text.append("text")
    .attr("x", 15)
    .attr("y", function(d, i) {return i*100 + 55; })
    .text(function(d,i) {return 1000-(i*250);});
text.append("text")
    .attr("x", 15)
    .attr("y", function(d, i) {return i*100 + 70; })
    .text(" mil");

//x axis title
text.append("text")
    .attr("x", 140)
    .attr("y", 480)
    .text("Land Mass in Million Square Miles");

//y axis title
stats = "Population ".split("");
text.data(stats);
text.append("text")
    .attr("x", 0)
    .attr("y", function(d, i){return i*15 + 175; })
    .text(function(d) {return d;});
