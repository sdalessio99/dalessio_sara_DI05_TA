import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  datosTablaTab1 = [
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Pedro', apellido: 'ruiz', pais: "españa", edad: 40 },
    { nombre: 'Pedro', apellido: 'ruiz', pais: "españa", edad: 40 }
  ];

  datosLista = [
    "Esta será la línea 1 de la lista, vamos a poner un texto muy largo para ver qué es lo que hace en estos casos y como podemos corregirlo",
    "Esta será la línea 2 de la lista, será más corta que la anterior, pero entrará bastante justo en el ancho A4.",
    "Esta será la línea 3 de la lista, este entra bien",
    "Esta será la línea 4 de la lista, este entra bien",
    "Esta será la línea 5 de la lista, este entra bien",
    "Esta será la línea 6 de la lista, este entra bien",
    "Esta será la línea 7 de la lista, este entra bien",
    "Esta será la línea 8 de la lista, este entra bien",
    "Esta será la línea 9 de la lista, este entra bien",
    "Esta será la línea 10 de la lista, este entra bien",
    "Esta será la línea 11 de la lista, este entra bien",
    "Esta será la línea 12 de la lista, este entra bien",
    "Esta será la línea 13 de la lista, este entra bien",
    "Esta será la línea 14 de la lista, este entra bien",
    "Esta será la línea 15 de la lista, este entra bien",
    "Esta será la línea 16 de la lista, este entra bien",
    "Esta será la línea 17 de la lista, este entra bien",
    "Esta será la línea 18 de la lista, este entra bien",
    "Esta será la línea 19 de la lista, este entra bien",
    "Esta será la línea 20 de la lista, este entra bien",
  ]

  /* En el html, añadimos el atributo #container al div padre (será una id única), para luego poder gestionar todo lo que hay dentro de este div.
   * @ViewChield('container'), busca el atributo #container
   * Añadimos !, para decirle que el valor no será ni null ni undefined. En caso contrarío tendríamos que comprobar que if(this.container) antes de 
   * realizar this.container.nativeElement.
   */
  @ViewChild('container') container!: ElementRef;

  constructor() {}

  generarPDF() {
    // marcar las dimensiones de un A4 en pixeles
    const anchoMax = 794;
    const altoMax = 1123;
    // crear el documento con los tamaños indicados
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [anchoMax,altoMax]
    });

    // es un NodeList de secciones, como un array de objetos y se seleccionan todos los HTMLElements que tienen la class "seccion"
    const sections = this.container.nativeElement.querySelectorAll('.seccion') as NodeListOf<HTMLElement>;
    const totalSections = sections.length;
    let currentSectionIndex = 0;
    let contSections = 0;

    // añadir estas variables para la altura de header y footer
    let headerHeight = 55;
    let footerHeight = 20;
    // ahora la altura de la pagina se inicializa partiendo desde el headerHeight
    let currentPageHeight = headerHeight+footerHeight;

    while (currentSectionIndex < totalSections) {
      const section = sections[currentSectionIndex];
      // con html2canvas se convierte cada seccion html a un canvas y luego el canvas a jpg
      html2canvas(section).then(canvas => {
        const imageData = canvas.toDataURL('image/jpg');
        // calcular el tamaño que tiene que tener la imagen obtenida, internal.pageSize coge lo que le hemos puesto de tamaño al doc
        const width = doc.internal.pageSize.getWidth();
        // canvas.height es la altura de la imagen, width es el ancho del pdf y canvas.width es el ancho de la imagen
        // se usa la formula para calcular el tamaño de la imagen de manera proporcional y quepan en el PDF
        const height = canvas.height * (width / canvas.width);
        // con el if se comprueba si la pagina y la altura de la imagen no se pasan de la altura del PDF
        // si se pasan significa que no se pueden añadir mas imagenes a esa pagina y hay que crear una nueva y resetear el valor de currentPageHeight
        if (currentPageHeight + height >= doc.internal.pageSize.getHeight()) {
          doc.addPage();
          currentPageHeight = headerHeight+footerHeight;
        }
        // si caben mas imagenes, imageData es la imagen que se inserta, jpg es el formato, 0 es la coordenada X, currentPageHeight es la coordenada Y y el resto es lo que pone
        doc.addImage(imageData, 'JPG', 0, currentPageHeight, width, height);
        // finalmente se añade la altura de la imagen a la de la pagina para controlar la altura total
        currentPageHeight += height;
        // se van contando las partes hasta que se alcance el total de las secciones y cuando se llega se crea el PDF
        contSections++;
        if (contSections === totalSections) {
          this.addPageConfig(doc);
          doc.save('dashboard.pdf');
        }
      });
      currentSectionIndex++;
    }
  }

  addPageConfig(doc:jsPDF) {
    // numbereofpages obtienes el numero de paginas creadas
    for (let i = 1; i <= doc.getNumberOfPages(); i++) {
      // setpage podemos elegir la pagina que queremos modificar y eso se usa en el bucle para modificarlas todas
      doc.setPage(i);
      // valores de la imagen que queremos poner en el header
      const imagen = "/assets/icon/favicon.png";
      const imgWidth = 45;
      const imgHeight = 45;
      const imgX = 5;
      const imgY = 5;
      doc.addImage(imagen, "JPG", imgX, imgY, imgWidth, imgHeight);
      // definir el tamaño del texto que se va a poner en el header
      doc.setFontSize(10);
      // crear linea divisoria entre cabecera y contenido
      doc.line(0, 55, doc.internal.pageSize.width, 55);
      // datos de la cabecera
      const nombreEmpresa = "Nombre de la Empresa";
      const telefono = "Telefono: 123456789";
      const direccion = "Direccion:  Calle Principal, 123";
      const texto = nombreEmpresa+'\n'+telefono+'\n'+direccion;
      // añadir el texto al documento pdf
      doc.text(texto, doc.internal.pageSize.width - 120, 10, {baseline: 'top'});
      doc.text("Pagina "+i, doc.internal.pageSize.width - 100, doc.internal.pageSize.height - 10, {baseline: 'bottom'});
    }
  }
}
