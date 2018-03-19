var svg = document.getElementById("svg");

stats = [[17,142],[9.9,34],[9.8,308],[9,1],[3.2,192],[7.7,22],[3,1171],[2.7,40],[2.7,16],[2.5,42],[2.3,35]] //https://flowingdata.com/2009/11/13/land-mass-and-population-by-country/

var r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
r.setAttribute("width", 500);
r.setAttribute("height", 500);
r.setAttribute("style", "fill:rgb(255,255,255);stroke-width:3;stroke:rgb(0,0,0)");
svg.appendChild(r);

var circles = d3.select("svg").selectAll('circle').data(stats).enter();
circles.append('circle')
    .attr('cx', function(d){return d[0]*20+100})
    .attr('cy', function(d){return d[1]/10+100})
    .attr('r', 10);
