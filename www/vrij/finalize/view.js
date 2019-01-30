class FinalizeView {
  constructor() {
    this.ShowCurrentTask();

    //remove
    this.taken = [];
    this.huidige = 0;
    this.createDummy();
  }
  //ryan zijn code
  ShowCurrentTask() {
    //title
    var currentTask =
      "<h3 style=margin:0;margin-left:2vw; margin-top:1vh;> Huidige taak </h3>";

    //Details huidige taak
    currentTask +=
      "<table id='info' data-role='table' class='ui-responsive table-stroke ui-table ui-table-reflow'>" +
      "<tbody >" +
      "<tr>" +
      "<td id='stad' ><b > Postcode: </b></td><td class='ui-width'>2542</td>" +
      "</tr>" +
      "<tr>" +
      " <td id='straat'><b class='ui-table-cell-label' > Straat: </b></td><td class='ui-width'>breedstraat 128</td>" +
      "</tr>" +
      "<tr> " +
      "<td id='datum'><b class='ui-table-cell-label' > Datum: </b></td><td class='ui-width'>30-1-2019</td>" +
      "</tr>" +
      "<tr>" +
      "<td id='wat'><b class='ui-table-cell-label' > Hoeveelheid: </b> </td><td class='ui-width'>12</td>" +
      "</tr>" +
      "<tr><td id='tijd'><b class='ui-table-cell-label'  > Tijd: </b></td><td class='ui-width'> 14:30</td>" +
      "</tr>" +
      "<tr>" +
      "<td id='contact'><b class='ui-table-cell-label' > Contact: </b></td><td class='ui-width'>pietje</td>" +
      "</tr>" +
      "<tr>" +
      "<td id='tel'><b class='ui-table-cell-label' > Telefoon: </b></td><td class='ui-width'> 0612345678 </td>" +
      "</tr>" +
      "</tbody>" +
      "</table> ";
    //opties taak annuleren of afronden
    currentTask +=
      "<div class='ui-center'>" +
      "<a onClick='' href='#reden' data-rel='popup' data-transition='pop' data-position-to='window' id='btn-submit' class='ui-btn ui-options ui-rood'>Annuleren  <img src='include/css/images/icons-png/delete-white.png'></a>" +
      "<a onClick='' id='btn-submit' class='ui-btn ui-options ui-green'>Afronden <img src='include/css/images/icons-png/check-white.png'></a></div>";

    $("#content").html(currentTask);
  }
  showWheel() {
    //showing wheel

    this.huidige++;

    console.log(this.huidige);
  }

  //dummy content om door te lopen in het wiel
  createDummy() {
    for (var x = 1; x <= 3; x++) {
      this.taken[x] = [x];
      for (var y = 0; y < 3; y++) {
        this.taken[x][y] = 0;
      }
    }

    this.taken[1][1] = "2541";
    this.taken[1][2] = "12";

    this.taken[2][1] = "2542";
    this.taken[2][2] = "12";

    this.taken[3][1] = "2543";
    this.taken[3][2] = "12";
  }

  /*
    //table head
    form +=
      "<table id='table-offered-tasks' data-role='table' class='ui-responsive ui-table ui-table-reflow'>" +
      "<tbody>" +
      "<tr>" +
      "<td id='ui-nummer'><b>#</b></td>" +
      "<td><b>adress</b></td>" +
      "<td><b>hoeveelheid</b></td>" +
      "</tr>";

    // loading table content
    for (var x = 1; x < taken.length; x++) {
      form +=
        "<tr>" +
        "<td id='ui-nummer'>" +
        x +
        "</td>" +
        "<td>" +
        taken[x][1] +
        "</td>" +
        "<td>" +
        taken[x][2] +
        "</td>" +
        "</tr>";
    }



    // table end
    form += "</tbody>" + "</table>";

    $("#content").html(form);
  }*/

  //ben zijn code
  showQuantityForm() {
    $("#quantity-form").show();
    $("#photo-form").hide();
  }

  showPhotoForm() {
    $("#quantity-form").hide();

    // add images according to amount

    var quantity = $("#itemQuantity").val();

    if (quantity > 999) {
      quantity = 999;
    }

    var htmlphoto = "";

    for (var i = 0; i < quantity; i++) {
      var imageOption = "";
      imageOption += "<td><div class='image-upload'>";
      imageOption += "<label for='file-input-" + i + "'>";
      imageOption += "<h4>Foto #" + (i + 1) + "</h4>";
      imageOption +=
        "<img id='file-input-img-" +
        i +
        "' src='include/img/plus.png' class='ui-plus' max-width='50%' />";
      imageOption += "</label>";

      imageOption +=
        "<input id='file-input-" +
        i +
        "' class='photo-input' type='file' onChange='c.v.changePhotoIconToSolved(" +
        i +
        ")' />";
      imageOption += "</div></td>";

      switch (i % 2) {
        case 0:
          imageOption = "<tr>" + imageOption;
          break;
        case 1:
          imageOption = imageOption + "</tr>";
          break;
      }
      htmlphoto += imageOption;
    }
    $("#photo-icons").html(htmlphoto);

    $("#photo-form").fadeIn();
  }

  changePhotoIconToSolved(i) {
    // check if file is an image
    var allowed_types = ["image/jpg", "image/jpeg", "image/png", "image/bmp"];

    var img = $("#file-input-" + i).prop("files");
    var imgtype = img[0]["type"];

    if (allowed_types.indexOf(imgtype) >= 0) {
      $("#file-input-img-" + i).attr("src", "include/img/checkmark.png");
    } else {
      $("#file-input-img-" + i).attr("src", "include/img/crossmark.png");
    }
  }
}
