import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById("series")!;
const averageSeasonsElm: HTMLElement = document.getElementById("average_seasons")!;

renderSerieInTable(series);

averageSeasonsElm.innerHTML = `Seasons average: ${getAverageSeasons(series)}`

function renderSerieInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((series) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${series.id}</td>
                             <td style="color: blue;">${series.name}</td>
                             <td>${series.platform}</td>
                             <td>${series.seasons}</td>`;
      seriesTbody.appendChild(trElement);
      trElement.addEventListener("click", () => renderCard(series));
    });
  }

function getAverageSeasons(series: Serie[]): number {
    return series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length;
}

function renderCard(serie: Serie): void {
    let card: HTMLElement = document.getElementById("idcard")!;
    card.innerHTML = `<div class="card" id="idcard">
    <img src="${serie.image}" class="card-img-top" alt="Image">
    <div class="card-body">
      <h5 class="card-title">${serie.name}</h5>
      <p class="card-text">${serie.description}</p>
      <a href="${serie.link}">${serie.link}</a>
    </div>
  </div>`;
}
