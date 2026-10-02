/***************************************************
==================== JS INDEX ======================
****************************************************

01. PreLoader Js
02. Sticky Js
03. Menu Controls JS
04. offcanvas Menu JS
05. offcanvas two Menu JS
06. Sidebar Js
07. AOS Js
08. Backtotop Js
09. Magnific Popup Js
10. Counter Js
11. Feature Widget Animation Js
12. Service Two Images Hover Animation Js
13. Bg Image For Attribute  Js
14. Mouse active Js





****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");

  if (!preloader) return;

  // Small delay so the loading animation can appear briefly
  setTimeout(() => {
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
      preloader.style.zIndex = "-1";
    }, 500);
  }, 800);
});
  });

  ////////////////////////////////////////////////////
  // 02. Sticky Js
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 260) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });

  ////////////////////////////////////////////////////
  // 03. Menu Controls JS
  $(".tw-hamburger-toggle").on("click", function () {
    $(".tw-header-side-menu").slideToggle("tw-header-side-menu");
  });
  if ($(".tw-main-menu-content").length && $(".tw-main-menu-mobile").length) {
    let navContent = document.querySelector(".tw-main-menu-content").outerHTML;
    let mobileNavContainer = document.querySelector(".tw-main-menu-mobile");
    mobileNavContainer.innerHTML = navContent;
    let arrow = $(".tw-main-menu-mobile .has-dropdown > a");
    arrow.each(function () {
      let self = $(this);
      let arrowBtn = document.createElement("BUTTON");
      arrowBtn.classList.add("dropdown-toggle-btn");
      arrowBtn.innerHTML = "<i class='ph ph-caret-right'></i>";
      self.append(function () {
        return arrowBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("dropdown-opened");
        self.parent().toggleClass("expanded");
        self
          .parent()
          .parent()
          .addClass("dropdown-opened")
          .siblings()
          .removeClass("dropdown-opened");
        self.parent().parent().children(".tw-submenu").slideToggle();
      });
    });
  }

  ////////////////////////////////////////////////////
  // 04. offcanvas Menu JS
  $(".tw-offcanvas-open-btn").on("click", function () {
    $(".tw-offcanvas-2-area").addClass("opened");

    setTimeout(() => {
      $(".tw-text-hover-effect-word").addClass("animated-text");
    }, 900);
  });

  ////////////////////////////////////////////////////
  // 05. offcanvas two Menu JS
  $(".tw-offcanvas-2-close-btn").on("click", function () {
    setTimeout(() => {
      $(".tw-text-hover-effect-word").removeClass("animated-text");
    }, 1200);

    $(".tw-offcanvas-2-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  $(document).on("click", ".tw-main-menu-mobile a", function () {
    $(".tw-offcanvas-2-area").removeClass("opened");
    $(".body-overlay, .side-overlay, .overlay").removeClass("opened apply active");
  });

  ////////////////////////////////////////////////////
  // 06. Sidebar Js
  $(".tw-menu-bar").on("click", function () {
    $(".twoffcanvas").addClass("opened");
    $(".body-overlay").addClass("apply");
  });
  $(".close-btn").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".twoffcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });

  ////////////////////////////////////////////////////
  // 07. AOS Js
  AOS.init({
    once: false, // animation will happen every time you scroll
    offset: 0, // start animation when element enters the viewport
    anchorPlacement: "top-bottom", // when the bottom of the element hits the bottom of the screen
  });

  // 08. Backtotop Js
  function back_to_top() {
    var btn = $("#back_to_top");
    var btn_wrapper = $(".back-to-top-wrapper");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        btn_wrapper.addClass("back-to-top-btn-show");
      } else {
        btn_wrapper.removeClass("back-to-top-btn-show");
      }
    });

    $(document).on("click", "#back_to_top, .footer-three-back-to-top", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      $("html, body").stop().animate({ scrollTop: 0 }, 500);
    });
  }
  back_to_top();

  ////////////////////////////////////////////////////
  // 09. Magnific Popup Js
  $(".open-popup").magnificPopup({
    type: "iframe",
    removalDelay: 300,
    mainClass: "mfp-fade",
  });

  ////////////////////////////////////////////////////
  // 10. Counter Js
  new PureCounter();
  new PureCounter({
    filesizing: true,
    selector: ".filesizecount",
    pulse: 2,
  });

  ////////////////////////////////////////////////////
  // 11. Feature Widget Animation Js
  function service_animation() {
    var active_bg = $(".feature-widget .active-bg");
    var element = $(".feature-widget .current");
    $(".feature-widget .feature-2-item").on("mouseenter", function () {
      var e = $(this);
      activeService(active_bg, e);
    });
    $(".feature-widget").on("mouseleave", function () {
      element = $(".feature-widget .current");
      activeService(active_bg, element);
      element.closest(".feature-2-item").siblings().removeClass("mleave");
    });
    activeService(active_bg, element);
  }
  service_animation();
  function activeService(active_bg, e) {
    if (!e.length) {
      return false;
    }
    var topOff = e.offset().top;
    var height = e.outerHeight();
    var menuTop = $(".feature-widget").offset().top;
    e.closest(".feature-2-item").removeClass("mleave");
    e.closest(".feature-2-item").siblings().addClass("mleave");
    active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
  }
  $(".feature-widget .feature-2-item").on("click", function () {
    $(".feature-widget .feature-2-item").removeClass("current");
    $(this).addClass("current");
  });

  ////////////////////////////////////////////////////
  // 12. Service Two Images Hover Animation Js
  $(".service-two-list-wrap .service-two-list-item").on(
    "mouseenter",
    function () {
      $("#service-two-thumb").removeClass().addClass($(this).attr("rel"));
      $(this).addClass("active").siblings().removeClass("active");
    },
  );

  ////////////////////////////////////////////////////
  // 13. Bg Image For Attribute  Js
  $(".bg-img").each(function () {
    var img = $(this).data("background-image");
    if (img) {
      $(this).css("background-image", "url('" + img + "')");
    }
  });

  ////////////////////////////////////////////////////
  // 14. Mouse active Js
  $(document).ready(function () {
    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(".service-ip-wrapper").on("mouseenter", function () {
      $(this).addClass("active");
      $(this)
        .parent()
        .siblings()
        .find(".service-ip-wrapper")
        .removeClass("active");
    });
  });

  $(document).ready(function () {
    function initRipples() {
      $(".ripple-image").each(function () {
        var $container = $(this);
        var $img = $container.find("img").first();

        if ($img.length === 0) return;

        var img = new Image();
        img.src = $img.attr("src");

        img.onload = function () {
          var imgURL = img.src;

          $container.css({
            "background-image": "url(" + imgURL + ")",
            "background-size": "cover",
            "background-position": "center center",
          });

          // init ripples plugin
          if (typeof $container.ripples === "function") {
            $container.ripples({
              resolution: 400,
              perturbance: 0.03,
              imageUrl: imgURL,
            });
          }

          $img.hide();
        };
      });
    }

    initRipples();
  });

  ////////////////////////////////////////////////////
  // 15. Ajax Contact Form Submission Handler
  $(document).ready(function () {
    var $forms = $(
      "form.contact-form, form#main-contact-form, #contact-form form, .footer-three-form form"
    );

    if (!$forms.length) return;

    $forms.each(function () {
      var $form = $(this);

      $form.on("submit", function (e) {
        e.preventDefault();

        var $submitBtn = $form.find('button[type="submit"]');
        var $spinner = $submitBtn.find(".btn-spinner");
        var $btnText = $submitBtn.find(".btn-text");
        var originalBtnText = $btnText.length
          ? $btnText.text()
          : $submitBtn.text();

        // Status alert container
        var $statusAlert = $form.find(".form-status-alert");
        if (!$statusAlert.length) {
          $statusAlert = $('<div class="form-status-alert"></div>');
          $form.prepend($statusAlert);
        }

        $statusAlert
          .removeClass("alert-success alert-danger alert-info")
          .hide()
          .empty();

        // Extract input values
        var name = ($form.find('input[name="name"]').val() || "").trim();
        var email = ($form.find('input[name="email"]').val() || "").trim();
        var subject = (
          $form.find('input[name="subject"]').val() || "Portfolio Inquiry"
        ).trim();
        var message = (
          $form.find('textarea[name="message"]').val() || ""
        ).trim();
        var honey = ($form.find('input[name="_honey"]').val() || "").trim();

        // Bot honeypot check
        if (honey) {
          console.warn("Spam detected via honeypot.");
          return false;
        }

        // Basic client validation
        if (!name || !email || !message) {
          $statusAlert
            .addClass("alert-danger")
            .html("<strong>Please fill in all required fields.</strong>")
            .fadeIn(200);
          return false;
        }

        // Email regex validation
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          $statusAlert
            .addClass("alert-danger")
            .html("<strong>Please enter a valid email address.</strong>")
            .fadeIn(200);
          return false;
        }

        // Update UI to loading state
        $submitBtn.prop("disabled", true).addClass("loading");
        if ($spinner.length) {
          $spinner.removeClass("d-none");
        }
        if ($btnText.length) {
          $btnText.text("SENDING MESSAGE...");
        } else {
          $submitBtn.text("SENDING MESSAGE...");
        }

        // WhatsApp direct link for convenience
        var waUrl =
          "https://api.whatsapp.com/send?phone=923244416852&text=" +
          encodeURIComponent(
            "Hi Murtaza, I just submitted an inquiry on your portfolio (" +
              subject +
              "). My email is " +
              email +
              "."
          );
        var mailtoUrl =
          "mailto:murtazabaig4266@gmail.com?subject=" +
          encodeURIComponent("Inquiry: " + subject) +
          "&body=" +
          encodeURIComponent(
            "Name: " +
              name +
              "\nEmail: " +
              email +
              "\n\nMessage:\n" +
              message
          );

        // Submit via AJAX to FormSubmit
        fetch("https://formsubmit.co/ajax/murtazabaig4266@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message,
            _subject: "New Portfolio Inquiry from " + name + " (" + subject + ")",
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            $submitBtn.prop("disabled", false).removeClass("loading");
            if ($spinner.length) $spinner.addClass("d-none");
            if ($btnText.length) $btnText.text(originalBtnText);
            else $submitBtn.text(originalBtnText);

            // Check if FormSubmit returned an error or activation notice
            var isSuccess = data && (data.success === "true" || data.success === true || (data.message && data.message.indexOf("Activation") !== -1));

            if (isSuccess) {
              $statusAlert
                .removeClass("alert-danger alert-info")
                .addClass("alert-success")
                .html(
                  '<div class="d-flex align-items-start gap-3">' +
                    '<i class="ph-bold ph-check-circle" style="font-size: 1.5rem; color: #22c55e; flex-shrink: 0; margin-top: 2px;"></i>' +
                    "<div>" +
                    '<strong style="font-size: 1.05rem; display: block; margin-bottom: 4px;">Thank you, ' +
                    $("<div>").text(name).html() +
                    "!</strong>" +
                    "<span>Your message has been sent successfully. Murtaza will respond to you within 24 hours.</span>" +
                    '<div class="tw-mt-2" style="font-size: 0.88rem;">' +
                    'Need an instant response? <a href="' +
                    waUrl +
                    '" target="_blank" rel="noopener noreferrer" style="color: #22c55e; font-weight: 600; text-decoration: underline;">Chat on WhatsApp <i class="ph ph-whatsapp-logo"></i></a>' +
                    "</div>" +
                    "</div>" +
                    "</div>"
                )
                .fadeIn(300);

              // Reset form fields
              $form[0].reset();
            } else {
              // Service returned an unexpected status
              $statusAlert
                .removeClass("alert-success alert-info")
                .addClass("alert-danger")
                .html(
                  '<div class="d-flex align-items-start gap-3">' +
                    '<i class="ph-bold ph-warning-circle" style="font-size: 1.5rem; color: #ef4444; flex-shrink: 0; margin-top: 2px;"></i>' +
                    "<div>" +
                    '<strong style="font-size: 1.05rem; display: block; margin-bottom: 4px;">Submission Notice</strong>' +
                    "<span>" + (data.message || "Could not complete submission automatically.") + "</span>" +
                    '<div class="d-flex flex-wrap gap-2 tw-mt-3">' +
                    '<a href="' + mailtoUrl + '" class="tw-py-2 tw-px-3 rounded bg-white text-dark fw-bold tw-text-xs text-uppercase" style="text-decoration:none;"><i class="ph ph-envelope-simple tw-me-1"></i> Send via Email</a>' +
                    '<a href="' + waUrl + '" target="_blank" rel="noopener noreferrer" class="tw-py-2 tw-px-3 rounded bg-success text-white fw-bold tw-text-xs text-uppercase" style="text-decoration:none;"><i class="ph ph-whatsapp-logo tw-me-1"></i> Chat on WhatsApp</a>' +
                    "</div>" +
                    "</div>" +
                    "</div>"
                )
                .fadeIn(300);
            }
          })
          .catch(function (error) {
            console.error("Contact Form Submission Error:", error);
            $submitBtn.prop("disabled", false).removeClass("loading");
            if ($spinner.length) $spinner.addClass("d-none");
            if ($btnText.length) $btnText.text(originalBtnText);
            else $submitBtn.text(originalBtnText);

            // Network failure fallback
            $statusAlert
              .removeClass("alert-success alert-info")
              .addClass("alert-danger")
              .html(
                '<div class="d-flex align-items-start gap-3">' +
                  '<i class="ph-bold ph-warning-circle" style="font-size: 1.5rem; color: #ef4444; flex-shrink: 0; margin-top: 2px;"></i>' +
                  "<div>" +
                  '<strong style="font-size: 1.05rem; display: block; margin-bottom: 4px;">Network Error</strong>' +
                  "<span>Could not send form directly. Reach Murtaza directly via:</span>" +
                  '<div class="d-flex flex-wrap gap-2 tw-mt-3">' +
                  '<a href="' + mailtoUrl + '" class="tw-py-2 tw-px-3 rounded bg-white text-dark fw-bold tw-text-xs text-uppercase" style="text-decoration:none;"><i class="ph ph-envelope-simple tw-me-1"></i> Send via Email</a>' +
                  '<a href="' + waUrl + '" target="_blank" rel="noopener noreferrer" class="tw-py-2 tw-px-3 rounded bg-success text-white fw-bold tw-text-xs text-uppercase" style="text-decoration:none;"><i class="ph ph-whatsapp-logo tw-me-1"></i> Chat on WhatsApp</a>' +
                  "</div>" +
                  "</div>" +
                  "</div>"
              )
              .fadeIn(300);
          });
      });
    });
  });
})(jQuery);
