import { Component } from '@angular/core';
import { News } from './interfaces/news.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'act5';
  myNews: News[] = []
  constructor() {
    this.myNews = [
      {
        title: "Todo lo que sabemos de 'Ahsoka': tráiler, fecha de estreno, sinopsis y más",
        img: "https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2023/06/08/ahsoka.jpeg",
        body: "Hace cuatro años, en una galaxia muy, muy lejana, la cosa no pintaba demasiado bien. A las habituales amenazas imperiales se les unía el catastrófico estreno de Star Wars: El ascenso de Skywalker, confirmando malos tiempos para la saga warsie en pantalla. Pero entonces, un Mandaloriano (Pedro Pascal) y cierto bichín verde vinieron al rescate en The Mandalorian, la primera serie en acción real que, además, arrancaría un nuevo universo compartido de la franquicia en Disney+. Tres años después, Grogu es la criatura más adorable de la galaxia, Andor una de las apuestas televisivas más celebradas y la galaxia lejana se sigue expandiendo fulgurante en pequeña pantalla. Ahsoka llegará este verano para, con suerte, alargar esta racha y, de paso, continuar la historia de Star Wars Rebels, la serie animada de Dave Filoni que ya cuenta con un fandom fiel y críticas positivas entre la prensa especializada. Rosario Dawson se lanza en solitario tras pasar por The Mandalorian y El libro de Boba Fett y, de momento, parece que la Fuerza está de su lado.",
        date: "08-06-2023"
      },
      {
        title: "Star Wars ya no necesita más a Luke Skywalker, Mark Hamill se despide del icónico personaje",
        img: "https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2023/06/05/mark-hamill.jpeg",
        body: `"Nunca digas nunca", reconoció Mark Hamill en una reciente entrevista para CBS Sunday Morning respecto a la posibilidad de volver a interpretar a Luke Skywalker de nuevo en las series o películas que prepara Disney de Star Wars, pero el intérprete que hizo de Luke uno de los personajes más icónicos de la historia del cine, gracias a la trilogía de George Lucas iniciada en 1977, piensa que las nuevas historias que estén por contar y venir no requieren de su presencia."Tuve mi momento, y eso es bueno, pero ya es suficiente", respondió Hamill y, pese a que no cerró las puertas del todo, aseguró que, en lo referente a retomar el papel, sea en su vejez o en una versión rejuvenecida, "no veo ninguna razón para hacerlo. Permíteme decirlo así: tienen tantas historias que contar que ya no necesitan a Luke".`,
        date: "05-06-2023"
      }]
  }
  loadNews():string{
    let html ="" //hace referencia al html que queremos pintar
    this.myNews.forEach( News => {
      html += `<article>
              <h2>${News.title}</h2>
              <img src="${News.img}" alt="${News.title}">
              <p>${News.date}</p>
              <p>${News.body}</p>
              </article>`
    })
    return html
  }
  //el titulo deberia ser el determinante para no repetir una noticia, ya que img puede ser otra, al igual que la
  //descripcion y la fecha de publicacion, pero no pueden haber dos noticias con el mismo titulo porque seria noticia repetida.
  emitNews($event:News){
    console.log(this.myNews)
    const found = this.myNews.findIndex(news => news.title===$event.title);
    if (found === -1){
      if ($event.title!=="" && $event.body!=="" && $event.date!=="" && $event.img!==""){
        const replaced = $event.date.replace(/[0-9]/g, 'a')
        if(replaced === "aa-aa-aaaa"){
          this.myNews.push($event)
        }else{
          alert("La fecha no es válida. Por favor, introduzca una fecha con el formato dd-mm-aaaa")
        }
      }else{
        alert("Por favor, rellene todos los campos")
      }
    }else{
      alert("Esta noticia ya ha sido publicada")
    }
    
  }
}
