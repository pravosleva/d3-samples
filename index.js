// https://www.youtube.com/watch?v=C4t6qfHZ6Tw
// https://scrimba.com/g/gd3js

const originalData = [
  {
    date: 1550696400000, // Used! 2019-02-21
    customers: {
      total: 291240, // Used!
      registeredInLastDay: 356,
    },
    carCenters: {
      total: 5530,
      registeredInLastDay: 13,
    },
    bids: {
      total: 494674, // Used!
      registeredInLastDay: 551,
      fwdInLastDay: 8,
      paiedFromCreditCardsRUB: 16250,
    },
  },
  {
    date: 1550782800000, // 2019-02-22
    customers: {
      total: 291669,
      registeredInLastDay: 402,
    },
    carCenters: {
      total: 5544,
      registeredInLastDay: 15,
    },
    bids: {
      total: 495256,
      registeredInLastDay: 557,
      fwdInLastDay: 3,
      paiedFromCreditCardsRUB: 28631,
    },
  },
  {
    date: 1550869200000, // 2019-02-23
    customers: {
      total: 295669,
      registeredInLastDay: 402,
    },
    carCenters: {
      total: 5544,
      registeredInLastDay: 15,
    },
    bids: {
      total: 498256,
      registeredInLastDay: 557,
      fwdInLastDay: 3,
      paiedFromCreditCardsRUB: 28631,
    },
  },
  {
    date: 1550955600000, // 2019-02-24
    customers: {
      total: 296669,
      registeredInLastDay: 402,
    },
    carCenters: {
      total: 5544,
      registeredInLastDay: 15,
    },
    bids: {
      total: 499256,
      registeredInLastDay: 557,
      fwdInLastDay: 3,
      paiedFromCreditCardsRUB: 28631,
    },
  },
  {
    date: 1551042000000, // 2019-02-25
    customers: {
      total: 301669,
      registeredInLastDay: 402,
    },
    carCenters: {
      total: 5544,
      registeredInLastDay: 15,
    },
    bids: {
      total: 501256,
      registeredInLastDay: 557,
      fwdInLastDay: 3,
      paiedFromCreditCardsRUB: 28631,
    },
  },
  {
    date: 1551128400000, // 2019-02-26
    customers: {
      total: 321669,
      registeredInLastDay: 402,
    },
    carCenters: {
      total: 5544,
      registeredInLastDay: 15,
    },
    bids: {
      total: 521256,
      registeredInLastDay: 557,
      fwdInLastDay: 3,
      paiedFromCreditCardsRUB: 28631,
    },
  },
  {
    date: 1551214800000, // 2019-02-27
    customers: {
      total: 421669,
      registeredInLastDay: 402,
    },
    carCenters: {
      total: 5544,
      registeredInLastDay: 15,
    },
    bids: {
      total: 571256,
      registeredInLastDay: 557,
      fwdInLastDay: 3,
      paiedFromCreditCardsRUB: 28631,
    },
  },
  {
    date: 1551301200000, // 2019-02-28
    customers: {
      total: 481669,
      registeredInLastDay: 402,
    },
    carCenters: {
      total: 5544,
      registeredInLastDay: 15,
    },
    bids: {
      total: 671256,
      registeredInLastDay: 557,
      fwdInLastDay: 3,
      paiedFromCreditCardsRUB: 28631,
    },
  },
  {
    date: 1551387600000, // 2019-03-01
    customers: {
      total: 551669,
      registeredInLastDay: 402,
    },
    carCenters: {
      total: 5544,
      registeredInLastDay: 15,
    },
    bids: {
      total: 771256,
      registeredInLastDay: 557,
      fwdInLastDay: 3,
      paiedFromCreditCardsRUB: 28631,
    },
  },
];
const bidsTotalDataset = originalData.map(e => e.bids.total);
// const bidsTotalDataset = [100, 200, 400, 500, 600, 100, 1000];
const elm = d3.select('div[class=d3-tst]');

// --- Ex #1

d3.select('h1').text('Ex #1');
elm.append('p').text('1');
elm.append('p').text('2');
elm.append('p').text('3');
d3.selectAll('p').style('color', 'blue');

// ---

// --- Ex #2

d3.select('h1').text('Ex #2');
d3.selectAll('p').remove();
// bidsTotalDataset.map(e => elm.append('p').text(e));
elm.selectAll('p')
  .data(bidsTotalDataset)
  .enter()
  .append('p')
  .text(d => `data: ${d}`);

// ---

// --- Ex #3

const svgWidth = 600, svgHeight = 250, barPadding = 5;
const barWidth = (svgWidth / bidsTotalDataset.length);
// const widthScale = d3.scaleBand().domain(d3.range(0, bidsTotalDataset.length)).range([0, svgWidth]);
const heightScale = d3.scaleLinear()
  .domain([
    0,
    bidsTotalDataset.length ? d3.max([...bidsTotalDataset.map(e => e)]) : 0,
  ])
  .range([0, svgHeight]);

d3.select('h1').text('Ex #3');
d3.selectAll('p').remove();

let svg = elm.append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);
const barChart = svg.selectAll('rect')
  .data(bidsTotalDataset)
  .enter()
  .append('rect')
  .attr('y', d => svgHeight - heightScale(d))
  .attr('height', d => heightScale(d))
  .attr('width', barWidth - barPadding)
  .attr('fill', 'steelblue')
  .attr('transform', (d, i) => {
    const translate = [barWidth * i, 0];

    return `translate(${translate})`;
  });

// ---

// --- Ex #4

const yScale = d3.scaleLinear()
  .domain([0, d3.max(originalData.map(e => e.bids.total))])
  .range([0, svgHeight]);

d3.select('h1').text('Ex #4');
// d3.selectAll('p').remove();

const text = svg.selectAll('text')
  .data(originalData.map(e => e.bids.total))
  .enter()
  .append('text')
  .text(d => 'bids\n' + d)
  .attr('y', (d, i) => (svgHeight - yScale(d) + 15))
  .attr('x', (d, i) => barWidth * i + 2)
  .attr('fill', '#FFF')
  .attr('style', 'font-size: 13px; white-space: pre;');

// ---

// --- Ex #5

d3.select('h1').text('Ex #4 / #5');
// d3.selectAll('p').remove();
// d3.selectAll('svg').remove();

const margin = { top: 20, right: 20, bottom: 30, left: 50 };
const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;
const svg2 = elm.append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);
const g = svg2.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);
const x = d3.scaleTime().range([0, width]);
const y = d3.scaleLinear().rangeRound([height, 0]);
const line = d3.line()
  .x(d => {
    // console.log(d);
    return x(d.date);
  })
  .y(d => {
    // console.log(d);
    return y(d.customers.total);
  });

x.domain(d3.extent(originalData, d => d.date));
y.domain(d3.extent(originalData, d => d.customers.total));

g.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .append('text')
  .attr('fill', '#000')
  .attr('transform', `translate(${width}, -20)`)
  .attr('y', 6)
  .attr('dy', '0.71em')
  .attr('text-ancor', 'end')
  .text('Date');
  // .select('.domain').remove();
g.append('g')
  .call(d3.axisLeft(y))
  .append('text')
  .attr('fill', '#000')
  .attr('transform', 'rotate(-90)')
  .attr('y', 6)
  .attr('dy', '0.71em')
  .attr('text-ancor', 'end')
  .text('Customers');
g.append('path')
  .datum(originalData)
  .attr('fill', 'none')
  .attr('stroke', 'steelblue')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round')
  .attr('stroke-width', 1.5)
  .attr('d', line);

// Points
originalData.map(e => {
  // console.log(e);
  g.append('circle')
    .attr('cx', x(e.date))
    .attr('cy', y(e.customers.total))
    .attr('r', 5)
    .attr('fill', '#FFF')
    .attr('stroke', 'red')
    .attr('style', 'cursor: pointer')
    .on('click', (d) => {
      console.log(e.date);
    });
});

// ---
