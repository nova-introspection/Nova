import * as d3 from 'd3';
import graphFunctions from './graphFunctions';

export default {
  reset: () => {
    // const svg = d3.select('#graph');
    // const width = +svg.attr('width');
    // const height = +svg.attr('height');
    d3.select('g').transition()
      .duration(250)
      .attr('transform', 'translate(0,0)scale(1)');
    // .attr("transform", `translate(${width/4},${height/4})scale(.4)`);
    d3.zoom().transform(d3.select('#graph'), d3.zoomIdentity.scale(1));
    // d3.zoom().transform(d3.select('#graph'), d3.zoomIdentity.translate(width/4,height/4).scale(.4));
  },
  setup: (data, handleClick) => {
    graphFunctions.nodes.clickNode = (d) => {
      handleClick(d.name);
    };
    data.nodes.forEach((item) => { item.radius = item.name.length * 3.5 + 25; });
    const color = d3.scaleOrdinal(d3.schemePastel1);
    // const radius = d3.scaleSqrt().range([0, 6]);
    const svg = d3.select('#graph');
    graphFunctions.background(svg);
    const width = +svg.attr('width');
    const height = +svg.attr('height');
    const simulation = d3.forceSimulation().nodes(data.nodes);
    const linkForce = d3.forceLink(data.links).id(d => d.name)
      .distance((d) => { return (d.source.radius + d.target.radius) + 1000; });
    // .distance(function(d) { return radius(d.source.value / 2) + radius(d.target.value / 2); });
    const chargeForce = d3.forceManyBody().strength(-300);
    const centerForce = d3.forceCenter(width / 2, height / 2);
    const collideForce = d3.forceCollide().radius(d => d.radius * 1.5);
    simulation.force('charge', chargeForce)
      .force('collide', collideForce)
      .force('center', centerForce)
      .force('links', linkForce)
      .force('forceX', d3.forceX(width / 2).strength(0.025))
      .force('forceY', d3.forceY(height / 2).strength(0.025));
    // .force("forceX",d3.forceX(width/2).strength(function(d){ return (!d.notLinked) ? 0 : 0.05; }) )
    // .force("forceY",d3.forceY(height/2).strength(function(d){ return (!d.notLinked) ? 0 : 0.05; }) )
    simulation.on('tick', tickActions);
    simulation.on('end', () => {
      simulation.stop();
    });

    const g = svg.append('g').attr('class', 'everything');

    graphFunctions.links.addArrows(g);

    const link = g.append('svg:g').selectAll('path')
      .data(data.links).enter()
      .append('svg:path');

    graphFunctions.links.addPath(link);

    const node = g.append('g').selectAll('circle')
      .data(data.nodes).enter()
      .append('g');

    node.append('circle')
      .attr('class', 'nodes')
      .attr('r', graphFunctions.nodes.radius)
      .attr('fill', graphFunctions.nodes.circleColour)
      .style('stroke', graphFunctions.nodes.darkerStroke)
      .style('stroke-width', 3)
      .on('click', graphFunctions.nodes.clickNode)
      .on('mouseover', fade(0.25))
      .on('mouseout', fade(1));

    graphFunctions.nodes.addTextAndTitle(node);

    const dragHandler = d3.drag()
      .on('start', graphFunctions.drag.dragStart(simulation))
      .on('drag', graphFunctions.drag.dragDrag(simulation))
      .on('end', graphFunctions.drag.dragEnd(simulation));
    dragHandler(node);

    const zoomHandler = d3.zoom()
      .scaleExtent([0.1, 7])
      .on('zoom', graphFunctions.zoom.zoomActions(g));
    zoomHandler(svg);
    zoomHandler.scaleTo(svg, 0.8);
    svg.on('dblclick.zoom', null);

    function tickActions() {
      link.attr('d', graphFunctions.ticks.linkArrowArc);
      node.attr('transform', graphFunctions.ticks.positionNode);
    }

    const linkedByIndex = graphFunctions.links.linkedByIndex(data.links);

    function fade(opacity) {
      return (d) => {
        if (opacity === 1) { document.querySelector('body').style.cursor = 'default'; }
        else { document.querySelector('body').style.cursor = 'pointer'; }
        node.style('stroke-opacity', function (o) {
          const thisOpacity = graphFunctions.links.isConnected(d, o, linkedByIndex) ? 1 : opacity;
          this.setAttribute('fill-opacity', thisOpacity);
          return thisOpacity;
        });
        node.select('circle').style('color', function (o) {
          const col = (o.color) ? o.color : 0;
          const bright = d3.rgb(color(col)).brighter(0.3);
          const original = d3.rgb(color(col));
          const fill = (opacity === 1) ? original : bright;
          this.setAttribute('fill', fill);
        });
        link.style('stroke-opacity', o => (o.source === d || o.target === d ? 1 : opacity));
        link.attr('marker-end', o => (opacity === 1 || o.source === d || o.target === d ? 'url(#end-arrow)' : 'url(#end-arrow-fade)'));
      };
    }
  },
};
