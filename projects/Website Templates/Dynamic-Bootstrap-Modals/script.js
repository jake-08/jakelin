/*---------------------------------------
Define jQuery(function) for information hiding and encapsulation,
anything defined inside the function remians  local to the function
and inaccessable from the outside world
-----------------------------------------*/
jQuery(function ($) {
  $(".btn-modal").on("click", function () {
    var url = $(this).data("url");
    var title = $(this).data("title");
    var modal = $(this).data("bsTarget");
    var clear = $(this).data("clear");
    var button = $(this).data("button");

    if ($(modal).length == 0) return false;

    //clear form before loading
    if (clear) clearModalForm(modal);

    //set modal title
    if (title) $(modal).find(".modal-title").text(title);

    //set modal button
    if (button) $(modal).find(".btn-modal").text(button);

    //load form value if url is defined
    if (url) {
      $.ajax({
        cache: false,
        type: "GET",
        url: url,
        success: function (data) {
          populateInput(modal, data);
        },
        error: function () {
          alert("Failed to retrieve data.");
        },
        complete: function () {
          $(modal)
            .find(".btn-cancel")
            .click(function () {
              if (clear) {
                clearModalForm(modal);
              }
            });
        },
      });
    }

    return false;
  });
});

/*---------------------------------------
Reset input in forms
-----------------------------------------*/
function clearModalForm(modal) {
  // find all input from the modal and set the value to empty string
  $(":input", modal).val("");
  //this is to prevent showing the error message when the form is reopened after submit and cancel action
  $(modal).find(".field-validation-error").children(".has-error").remove();
  $(modal).find(".has-error").removeClass("has-error");
}

/*---------------------------------------
 * function to populate input fields
-----------------------------------------*/
function populateInput(modal, data) {
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      $(modal)
        .find("input[name='" + key + "']")
        .val(data[key]);
    }
  }
}

/*---------------------------------------
Define jQuery(function) for information hiding and encapsulation,
anything defined inside the function remians  local to the function
and inaccessable from the soutside world
-----------------------------------------*/
jQuery(function ($) {
  $(".btn-confirm-modal").on("click", function () {
    var url = $(this).data("url");
    var title = $(this).data("title");
    var body = $(this).data("body");
    // var modal = $(this).data("bsTarget");

    // if ($(modal).length == 0) return false;

    showConfirmModal(title, body, url);
  });
});

/*---------------------------------------
 * function to show Confirm Modal
-----------------------------------------*/
function showConfirmModal(title, body, url) {
  var confirmModal = $(
    '<div class="modal fade" id="confirmModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">' +
      '<div class="modal-dialog">' +
      '<div class="modal-content">' +
      '<div class="modal-header">' +
      '<h5 class="modal-title" id="confirmModalLabel">' +
      title +
      "</h5>" +
      '<button type="button" class="btn-close btn-cancel" data-bs-dismiss="modal" aria-label="Close"></button>' +
      "</div>" +
      '<div class="modal-body">' +
      "<h5>" +
      body +
      "</h5>" +
      "</div>" +
      '<div class="modal-footer">' +
      '<button type="button" class="btn btn-secondary btn-cancel" data-bs-dismiss="modal">Close</button>' +
      '<button type="button" class="btn btn-danger btn-confirm">Confirm</button>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>"
  );
  confirmModal.modal("show");

  confirmModal.find(".btn-confirm").click(function (event) {
    event.preventDefault();
    if (url) {
      $.ajax({
        cache: false,
        type: "GET",
        url: url,
        success: function (data) {
          console.log(data);
          confirmModal.find(".btn-cancel").click();
        },
        error: function () {
          alert("Failed to retrieve data.");
        },
      });
    }
  });
}
