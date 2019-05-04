import * as d3 from 'd3';
import graphFunctions from './graphFunctions';

export default {
  reset: () => {
    d3.select('g')
      .transition()
      .duration(250)
      .attr('transform', 'translate(0,0)scale(1)');
    d3.zoom().transform(d3.select('#graph'), d3.zoomIdentity.scale(1));
  },
  setup: (data, handleClick) => {
    graphFunctions.nodes.clickNode = (d) => {
      handleClick(d.name);
      fade(0.25);
    };
    const color = d3.scaleOrdinal(d3.schemePastel1);
    // const radius = d3.scaleSqrt().range([0, 6]);
    const svg = d3.select('#graph');

    const width = +svg.attr('width');
    const height = +svg.attr('height');
    const simulation = d3.forceSimulation().nodes(data.nodes);
    const linkForce = d3
      .forceLink(data.links)
      .id(d => d.name)
      .distance(d => d.source.radius + d.target.radius + 1000);
    // .distance(function(d) { return radius(d.source.value / 2) + radius(d.target.value / 2); });
    const chargeForce = d3.forceManyBody().strength(-300);
    const centerForce = d3.forceCenter(width / 2, height / 2);
    const collideForce = d3.forceCollide().radius(d => d.radius * 1.5);
    simulation
      .force('charge', chargeForce)
      .force('collide', collideForce)
      .force('center', centerForce)
      .force('links', linkForce)
      .force('forceX', d3.forceX(width / 2).strength(0.025))
      .force('forceY', d3.forceY(height / 2).strength(0.025));
    // .force("forceX",d3.forceX(width/2).strength(function(d){ return (!d.notLinked) ? 0 : 0.05; }) )
    // .force("forceY",d3.forceY(height/2).strength(function(d){ return (!d.notLinked) ? 0 : 0.05; }) )
    simulation.on('tick', tickActions);

    const g = d3.select('.everything');
    g.on('click', () => {
    });
    // graphFunctions.links.addArrows(g);

    const link = g
      .append('svg:g')
      .selectAll('path')
      .data(data.links)
      .enter()
      .append('svg:path');

    graphFunctions.links.addPath(link);

    const node = g
      .append('g')
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('g');

    const node2 = g
      .append('g')
      .selectAll('rect')
      .enter()
      .append('g');

    node
      .append('circle')
      .attr('class', 'nodes')
      .attr('r', graphFunctions.nodes.radius)
      .attr('fill', graphFunctions.nodes.circleColour)
      .style('stroke', graphFunctions.nodes.darkerStroke)
      .style('stroke-width', 6)
      // .on('click', graphFunctions.nodes.clickNode)
      .on('click', (d) => {
        fade(0.04)(d);
        graphFunctions.nodes.clickNode(d);
      })
      // .on('click', fade(0.25)) dblclick
      .on('dblclick', function (d, e) {
        // console.log(node._groups[0][e])
        // node._groups[0][e]
        const x = d3.select(this.parentElement);
        if (!d.expanded) {
          d.expanded = true;

          x.append('rect')
            .attr('class', 'table')
            .attr('id', `table${e}`)
            .attr('width', '20em')
            .attr('height', '20em')
            .attr('x', '2.5em')
            .attr('y', '2.5em')
            .attr('rx', '10px')
            .attr('ry', '10px')
            .attr('fill', 'whitesmoke')
            .style('stroke', 'gray')
            .style('stroke-width', 6);
        } else {
          d.expanded = false;
          d3.select(`#table${e}`).remove()
        }
      })
      .on('mouseover', (d, e) => {
        document.querySelector('body').style.cursor = 'pointer';
      })
      .on('mouseout', () => {
        document.querySelector('body').style.cursor = 'default';
      });

    // node
    //   .append('rect')
    //   .attr('class', 'nodes2')
    //   // .attr('r', graphFunctions.nodes.radius)
    //   .attr('width', '10em')
    //   .attr('height', '2em')
    //   .attr('x', '2.5em')
    //   .attr('y', '2.5em')
    //   .attr('rx', '5px')
    //   .attr('ry', '5px')
    //   .attr('fill', 'blue')
    //   .style('stroke', graphFunctions.nodes.darkerStroke)
    //   .style('stroke-width', 6)

    function equalToEventTarget() {
      return this == d3.event.target;
    }

    svg.on('click', () => {
      const circles = d3.selectAll('circle');
      const outsideCircles = circles.filter(equalToEventTarget).empty();
      if (outsideCircles) {
        fade(1)(node);
      }
    });

    graphFunctions.nodes.addTextAndTitle(node);

    const dragHandler = d3
      .drag()
      .on('start', graphFunctions.drag.dragStart(simulation))
      .on('drag', graphFunctions.drag.dragDrag(simulation))
      .on('end', graphFunctions.drag.dragEnd(simulation));
    dragHandler(node);

    const zoomHandler = d3
      .zoom()
      .scaleExtent([0.1, 7])
      .on('zoom', graphFunctions.zoom.zoomActions(g));
    zoomHandler(svg);
    zoomHandler.scaleTo(svg, 0.7);
    svg.on('dblclick.zoom', null);

    function tickActions() {
      link.attr('d', graphFunctions.ticks.linkArrowArc);
      node.attr('transform', graphFunctions.ticks.positionNode);
    }

    const linkedByIndex = graphFunctions.links.linkedByIndex(data.links);

    function fade(opacity) {
      return (d) => {
        // update nodes opacity; loops through all nodes
        node.style('stroke-opacity', function (o) {
          const thisOpacity = graphFunctions.links.isConnected(d, o, linkedByIndex) ? 1 : opacity;
          this.setAttribute('fill-opacity', thisOpacity);
          return thisOpacity;
        });
        node.select('circle').style('color', function (o) {
          const col = o.color ? o.color : 0;
          const bright = d3.rgb(color(col)).brighter(0.3);
          const original = d3.rgb(color(col));
          const fill = opacity === 1 ? original : bright;
          this.setAttribute('fill', fill);
        });
        link.style('stroke-opacity', o => (o.source === d ? 1 : opacity));
        link.attr('marker-end', o => (opacity === 1 || o.source === d ? 'url(#end-arrow)' : 'url(#end-arrow-fade)'));
      };
    }
  },
};
