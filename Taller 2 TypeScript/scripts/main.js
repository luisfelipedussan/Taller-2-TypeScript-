import { series } from './data.js';
var seriesTbody = document.getElementById("series");
var averageSeasonsElm = document.getElementById("average_seasons");
renderSerieInTable(series);
averageSeasonsElm.innerHTML = "Seasons average: ".concat(getAverageSeasons(series));
function renderSerieInTable(series) {console.log('Desplegando series');
    series.forEach(function (series) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(series.id, "</td>\n       <td style=\"color: blue;\">").concat(series.name, "</td>\n                             <td>").concat(series.platform, "</td>\n                             <td>").concat(series.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener("click", function () { return renderCard(series); });
    });}
function getAverageSeasons(series) {
    return series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0) / series.length;
}
function renderCard(serie) {
    var card = document.getElementById("idcard");
    card.innerHTML = "<div class=\"card\" id=\"idcard\">\n  <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"Image\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(serie.name, "</h5>\n      <p class=\"card-text\">").concat(serie.description, "</p>\n      <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n    </div>\n  </div>");
}
