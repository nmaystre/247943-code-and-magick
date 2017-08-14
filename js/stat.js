// stats.js
'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40; // px;
  var indent = 50;    // px;
  var initialX = 110; // px;
  var initialY = 20;  // px;

  var histogramX = initialX + 50; // px;
  var histogramY = initialY + 70;  // px;


  // ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла
  // for(var i = 0; i < times.length; i++) {
  //     ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeigth);
  //     ctx.fillText(names[i], initialX + histogramWidth, initialY + indent * i);
  // }

  ctx.textBaseline = 'bottom';
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomNumber = Math.random() * (1 - 0.1) + 0.1;
      ctx.fillStyle = 'rgba(0,0,255,' + randomNumber + ')';
    }

    ctx.fillRect(histogramX + (barWidth + indent) * i, histogramHeight - times[i] * step + histogramY, barWidth, times[i] * step);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], histogramX + (barWidth + indent) * i, (histogramY + 30) + histogramHeight);
    ctx.fillText(Math.ceil(times[i]), histogramX + (barWidth + indent) * i, histogramHeight - times[i] * step + histogramY);
  }


};
