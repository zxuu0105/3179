
// 加载并嵌入地图可视化文件
vegaEmbed('#vis_map', 'wk10map.vg.json').then(function(result) {
    // 处理地图结果或其他逻辑
  }).catch(console.error);
  
  // 加载并嵌入柱状图可视化文件
  vegaEmbed('#vis_bar', 'wk10barchart.vg.json').then(function(result) {
    // 处理柱状图结果或其他逻辑
  }).catch(console.error);
