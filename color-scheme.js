document.querySelector('vega-chart').addEventListener('connect', () => {
    vega.scheme('packed-circle-default', ['#d8ecfb', '#99d3fd', '#ff9836', '#db6c03', '#feca98'])
    vega.scheme("scatter-plot", ["#2471A4","#70C2FE","#DB6C04","#8B1680"])
    vega.scheme('waterfall-scheme1', ['#feca98','#ff9836'])
    vega.scheme('waterfall-scheme2', ['#41AFFF','#99D3FD'])
    vega.scheme('waterfall-scheme3', ['#99D3FD','#D8ECFB'])
    vega.scheme('waterfall-scheme4', ['#B21111','#45C03D'])
    vega.scheme('waterfall-scheme5', ['#DB6C03','#41AFFF'])
})