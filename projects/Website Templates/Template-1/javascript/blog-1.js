// Set the base URL
var baseUrl = "https://canvas3.ytml.com.au/sites/5ee9c1db-8938-448f-807b-bb436998b738/preview";

// The options are for the parameters
var options = {
  type: "cast",
  page: 1,
  pagesize: 3,
  pagenavsize: 6, // number of pagination links that user wants to show per page
  castCategory: [],
};

// call the function with the options
showList($("#cast-show-list"), options);

function showList(widget, options) {
  // jQuery.extend() function merge the contents of two or more objects together into the first object.
  // the last object replaces the first object values given the same keys
  var settings = $.extend(
    {
      q: "",
      type: "group",
      page: 1,
      pagesize: 10,
      pagenavsize: 5,
      castCategory: [],
      isloadmore: false,
    },
    options
  );
  // console log the settings to see it.
  // console.log(settings)

  // Load the spinner while waiting for the canvasSearch() function to complete
  widget.append("<div id='searchLoadingImg'><i class='fa fa-spinner fa-pulse fa-2x fa-fw'></i></div>");

  // Call canvasSearch function
  canvasSearch(widget, settings);
}

function canvasSearch(widget, settings) {
  // create the data object
  var data = {};

  // if the type if cast, get all the key values.
  if (settings.type == "cast") {
    data = {
      q: settings.q,
      type: settings.type,
      cp: settings.page,
      cps: settings.pagesize,
      cc: settings.castCategory,
    };
  }

  // jQuery.ajax() performs an asynchronous HTTP (Ajax) request.
  $.ajax({
    url: baseUrl + "/api/search", // a string containing the URL to which the request is sent
    method: "get", // the HTTP method to use for the request (POST, GET, PUT)
    data: data, // data to be sent to the server
    traditional: true, // set this to true if you wish to use the traditional style of param serialization
    success: function (result) {
      // a function to be called if the request succeeds
      // console log to see the result that success returns
      // console.log(result)

      var current, size, total, numPages;
      if (settings.type == "cast") {
        current = result.Casts.page; // current page = 1
        size = result.Casts.pagesize; // number of articles in the page = 3
        total = result.Casts.total; // total articles = 8
        numPages = Math.ceil(total / size); // number of pagination pages needed to show the articles = 3
        console.log("numPages" + numPages)
      }

      // get loadmore setting
      var isloadmore = settings.isloadmore;

      // if loadmore is true
      if (!isloadmore) {
        // check if it is the cast
        if (settings.type == "cast") {
          if (total > 0) {
            widget.empty(); // remove the loading widget
            showCast(result, widget); // call the showCast function
        } else {
              widget.append($("<div>Sorry but no casts are available.</div>")); // if there is no casts, show this message beside the loading
          }
        }

        if (numPages > 1) { // if there is more than 1 page
          var pages = $("<ul>", { // create the pagination
            class: "pagination",
          });
          pages.appendTo(widget); // append this to the widget element 

          if (current > 1) { // current greater than 1 meaning not in page 1
            var previousNum = current - 1; // get the page number before the current page
            // create the previous icon
            var previous = $('<li data-p="' + previousNum + '"><a href="#" aria-label="Previous"><i class="fa fa-angle-left" aria-hidden="true"></i>&nbsp;</a></li>') 
              .appendTo(pages) // appendTo insterts every element in the set of matched elements to the end of the target
              .click(function () { // bind the click event handler
                var ops = settings; // get the setting object
                ops.page = $(this).data("p"); // change the page number key to the number that is in the data-p attribute
                // console.log($(this).data("p"));
                canvasSearch(widget, ops);
              });
          }

          var startNum = 1;
          var endNum = numPages;
          
          if (settings.pagenavsize % 2 == 0) { // checking if the pagination size is even or not e.g. 5 
            var gap = settings.pagenavsize / 2;
            console.log("Gap " + gap);
            if (current > gap && current + gap - 1 <= numPages) {
              startNum = current - gap;
              endNum = current + gap - 1;
            } else if (current + gap - 1 > numPages) {
              endNum = numPages;
              startNum = numPages - settings.pagenavsize + 1 > 0 ? numPages - settings.pagenavsize + 1 : 1;
            } else {
              endNum = settings.pagenavsize < numPages ? settings.pagenavsize : numPages;
            }
          } else { // if it not even, do the following
            var gap = (settings.pagenavsize - 1) / 2; // get the gap (5-1)/2 = 2
            if (current > gap && current + gap <= numPages) { // if currentpage greater than gap and current plus gap less than page numbers
              startNum = current - gap;
              endNum = current + gap;
            } else if (current + gap > numPages) {
              endNum = numPages;
              startNum = numPages - settings.pagenavsize + 1 > 0 ? numPages - settings.pagenavsize + 1 : 1;
            } else {
              endNum = settings.pagenavsize < numPages ? settings.pagenavsize : numPages;
            }
          }
          console.log("Start Number " + startNum)
          console.log("End Number " + endNum)
          for (var i = startNum; i <= endNum; i++) {
            var li = $('<li data-p="' + i + '"><a href="#">' + i + "</a></li>")
              .appendTo(pages)
              .click(function () {
                var ops = settings;
                ops.page = $(this).data("p");
                canvasSearch(widget, ops);
              });

            if (i == current) {
              li.addClass("active");
            }
          }

          if (numPages > current) {
            var nextNum = current + 1;
            var next = $('<li data-p="' + nextNum + '"><a href="#" aria-label="Next">&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>')
              .appendTo(pages)
              .click(function () {
                var ops = settings;
                ops.page = $(this).data("p");
                canvasSearch(widget, ops);
              });
          }
        }
      } else { // Using Load More function
        if (settings.type == "cast") {
          if (total > 0) {
            showCast(result, widget);
          } else {
            widget.append($("<div>Sorry but no casts are available.</div>"));
          }
        }
        // load more
        $("#cast-show-list #searchLoadingImg").hide();
        $(".load-more").empty();
        var moreBtn = $('<div class="btn btn-more" data-p="' + (current + 1) + '">Load more</div>');
        if (current < numPages) {
          $(".load-more").append(moreBtn);
        }

        moreBtn.click(function (options) {
          $(this).replaceWith('<div class="btn btn-more"><i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i></div>');
          var ops = settings;
          ops.page = $(this).data("p");
          canvasSearch(widget, ops);
        });
      }
    },
  });
}

function showCast(result, widget) {
  result.Casts.list.forEach(function (cast) {
    var dom;
    var test = window.location.href;
    dom = baseUrl + "/knowledge-centre/newsletter/market-wrap-home/market-wrap-newsletter";

    if (test.includes("editorial")) {
      dom = baseUrl + "/knowledge-centre/newsletter/editorial-home/editorial-newsletter";
    } else if (test.includes("intouch")) {
      dom = baseUrl + "/knowledge-centre/newsletter/intouch-magazine-home/intouch-magazine-newsletter";
    }

    var img = cast.ImageLink;
    var castType = cast.Type;
    var linkUrl = cast.LinkUrl;
    var fileUrl = cast.FileUrl;
    var ref = cast.Reference;
    var pageLink = "";
    var title = cast.Title;
    var previewContent = "";
    var brief = cast.Brief;
    var summary = cast.Summary;
    var castID = cast.ID;
    var categoryName = cast.Categories;
    var publishDate = cast.PublishedOn.slice(0, 10);

    if (brief) {
      previewContent = brief;
    } else if (summary) {
      previewContent = summary;
    } else {
      previewContent = "";
    }

    if (castType == "Link") {
      pageLink = linkUrl;
    } else if (castType == "File") {
      pageLink = baseUrl + fileUrl;
    } else {
      // Content
      if (ref) {
        pageLink = dom + "/" + ref;
      } else {
        pageLink = dom + "?cast=" + castID;
      }
    }

    var readMore = 
        '<div class="post-more">\
            <a href="' + pageLink + '" target="_blank">Read More <i class="fa fa-chevron-right" aria-hidden="true"></i></a>\
        </div>';

    var appendStr =
      '<div class="value-of-advice-card post-area col-xs-12 col-md-4 animated fadeIn">\
            <div class="card-image">\
                <a href="' + pageLink + '" target="_blank">\
                    <img src="' + img + '" alt="' + title + '" / style="width: 100%;">\
                </a>\
            </div>\
                <div class="card-content">\
                    <p class="category-text">\
                        ' + categoryName + '\
                    </p>\
                        <p class="card-title">\
                            <a href="' + pageLink + '" target="_blank">' + title + '</a>\
                        </p>\
                    <p class="brief-text">' + previewContent + "</p>\
                </div>\
            </div>\
        </div>";
    widget.append(appendStr);
  });
}
