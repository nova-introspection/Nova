import * as d3 from 'd3';

export const color = d3.scaleOrdinal(d3.schemePastel1);

export default {
  links: {
    addArrows: (g) => {
      g.append('svg:defs').selectAll('marker')
        .data(['end-arrow']) // Different link/path types can be defined here
        .enter()
        .append('svg:marker') // This property adds in the arrows
        .attr('id', String)
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 10)
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5')
        .style('fill', 'whitesmoke')
        .style('opacity', d => d.opacity);
    },
    addPath: (link) => {
      link.attr('class', 'link')
        .style('fill', 'transparent')
        .style('stroke', (d) => {
          const col = (d.color) ? d.color : 0;
          return d3.rgb(color(col)).darker(0.5);
        })
        .attr('marker-end', 'url(#end-arrow)');
    },
    linkedByIndex: data => data.reduce((acc, d) => {
      acc[`${d.source.index},${d.target.index}`] = 1;
      return acc;
    }, {}),
    isConnected: (a, b, obj) => obj[`${a.index},${b.index}`] || a.index === b.index,
  },
  nodes: {
    circleColour: (d) => {
      const col = (d.color) ? d.color : 0;
      return color(col);
    },
    darkerStroke: (d) => {
      const col = (d.color) ? d.color : 0;
      return d3.rgb(color(col)).darker();
    },
    radius: d => d.radius,
    addTextAndTitle: (node) => {
      node.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '.35em')
        .text(d => d.name)
        .style('fill', 'black')
        .style('stroke-width', 0.5)
        .style('pointer-events', 'none');
    },
  },
  ticks: {
    positionNode: d => `translate(${d.x}, ${d.y})`,
    linkArrowArc: (d) => {
      const diffX = d.target.x - d.source.x;
      const diffY = d.target.y - d.source.y;
      const offset = 20;
      // Length of path from center of source node to center of target node
      const pathLength = Math.sqrt((diffX * diffX) + (diffY * diffY));

      // x and y distances from center to outside edge of target node
      const offsetX = (diffX * d.target.radius) / pathLength;
      const offsetY = (diffY * d.target.radius) / pathLength;

      const midPointX = (d.source.x + d.target.x) / 2;
      const midPointY = (d.source.y + d.target.y) / 2;
      const offX = midPointX + offset * (diffY / pathLength);
      const offY = midPointY - offset * (diffX / pathLength);

      return `M${d.source.x},${d.source.y}S${offX},${offY} ${d.target.x - offsetX},${d.target.y - offsetY}`;
    },
    linkArc: (d) => {
      const offset = 50;

      const midPointX = (d.source.x + d.target.x) / 2;
      const midPointY = (d.source.y + d.target.y) / 2;

      const dx = (d.target.x - d.source.x);
      const dy = (d.target.y - d.source.y);

      const normalise = Math.sqrt((dx * dx) + (dy * dy));

      const offSetX = midPointX + offset * (dy / normalise);
      const offSetY = midPointY - offset * (dx / normalise);

      return `M${d.source.x},${d.source.y}S${offSetX},${offSetY} ${d.target.x},${d.target.y}`;
    },
  },
  zoom: {
    zoomActions: g => () => {
      g.attr('transform', d3.event.transform);
    },
  },
  drag: {
    dragStart: sim => (d) => {
      if (!d3.event.active) sim.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    },
    dragDrag: () => (d) => {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    },
    dragEnd: sim => (d) => {
      if (!d3.event.active) sim.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    },
  },
};
