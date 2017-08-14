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

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 50;
  var initialX = 110;
  var initialY = 20;
  var histogramX = initialX + 50;
  var histogramY = initialY + 70;
  ctx.textBaseline = 'bottom';
  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomNumber = Math.random() * (1 - 0.1) + 0.1;
      ctx.fillStyle = 'rgba(0,0,255,' + randomNumber + ')';
    }
    var barShiftX = histogramX + (barWidth + indent) * i;
    var barShiftY = histogramHeight - times[i] * step + histogramY;
    ctx.fillRect(barShiftX, barShiftY, barWidth, times[i] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], barShiftX, (histogramY + 30) + histogramHeight);
    ctx.fillText(Math.ceil(times[i]), barShiftX, barShiftY);
  }
};
