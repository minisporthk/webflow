<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    $(document).ready(function () {
        $("select").on("change", function () {
            var venue = $(".venue").find(":selected").attr("data-list");
            var age = $(".age").find(":selected").attr("data-list");
            var program = $(".program").find(":selected").attr("data-list");
            var day = $(".time-of-week").find(":selected").attr("data-list");
            var time = $(".time-of-day").find(":selected").attr("data-list");

            var searchExists = false;

            $(".project").each(function () {
                 var classList = $(this).attr("class").split(/\s+/);

                // This lists out all the classes within each card
                console.log(classList);

                $(this).removeClass("show");
                $(this).addClass("hide");
                $(this).removeClass("active");

                // Hides panel that has been opened before adjustment to filters are made
                $(".panel").css("display", "none");

                // Ensure empty message is hidden each time a user adjusts the filter
                $(".empty-msg").css("display", "none");

                // If 1 selector is chosen
                if (
                    (venue != "" && age === "" && program === "" && day === "" && time === "") ||
                    (venue === "" && age != "" && program === "" && day === "" && time === "") ||
                    (venue === "" && age === "" && program != "" && day === "" && time === "") ||
                    (venue === "" && age === "" && program === "" && day != "" && time === "") ||
                    (venue === "" && age === "" && program === "" && day === "" && time != "")
                ) {
                    if (venue != "") {
                        if (jQuery.inArray(venue, classList) !== -1) {
                            $(this).removeClass("hide");
                            $(this).addClass("show");
                        }
                    } else if (age != "") {
                        if (jQuery.inArray(age, classList) !== -1) {
                            $(this).removeClass("hide");
                            $(this).addClass("show");
                        }
                    } else if (program != "") {
                        if (jQuery.inArray(program, classList) !== -1) {
                            $(this).removeClass("hide");
                            $(this).addClass("show");
                        }
                    } else if (day != "") {
                        if (jQuery.inArray(day, classList) !== -1) {
                            $(this).removeClass("hide");
                            $(this).addClass("show");
                        }
                    } else if (time != "") {
                        if (jQuery.inArray(time, classList) !== -1) {
                            $(this).removeClass("hide");
                            $(this).addClass("show");
                        }
                    }
                }

                // If 2 selectors chosen
                if (venue != "" && age != "" && program === "" && day === "" && time === "") {
                    if (
                        jQuery.inArray(venue, classList) !== -1 &&
                        jQuery.inArray(age, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue != "" && age === "" && program != ""  && day === "" && time === "") {
                    if (
                        jQuery.inArray(venue, classList) !== -1 &&
                        jQuery.inArray(program, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue != "" && age === "" && program === ""  && day != "" && time === "") {
                    if (
                        jQuery.inArray(venue, classList) !== -1 &&
                        jQuery.inArray(day, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue != "" && age === "" && program === ""  && day === "" && time != "") {
                    if (
                        jQuery.inArray(venue, classList) !== -1 &&
                        jQuery.inArray(time, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue === "" && age != "" && program != "" && day === "" && time === "") {
                    if (
                        jQuery.inArray(age, classList) !== -1 &&
                        jQuery.inArray(program, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue === "" && age != "" && program === "" && day != "" && time === "") {
                    if (
                        jQuery.inArray(age, classList) !== -1 &&
                        jQuery.inArray(day, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue === "" && age != "" && program === "" && day === "" && time != "") {
                    if (
                        jQuery.inArray(age, classList) !== -1 &&
                        jQuery.inArray(time, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue === "" && age === "" && program != "" && day != "" && time === "") {
                    if (
                        jQuery.inArray(program, classList) !== -1 &&
                        jQuery.inArray(day, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue === "" && age === "" && program != "" && day === "" && time != "") {
                    if (
                        jQuery.inArray(program, classList) !== -1 &&
                        jQuery.inArray(time, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue === "" && age === "" && program === "" && day != "" && time != "") {
                    if (
                        jQuery.inArray(day, classList) !== -1 &&
                        jQuery.inArray(time, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                // If 3 selectors chosen
                if (venue != "" && age != "" && program != "" && day === "" && time === "") {
                    if (
                        jQuery.inArray(venue, classList) !== -1 &&
                        jQuery.inArray(age, classList) !== -1 &&
                        jQuery.inArray(program, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue != "" && age != "" && program === "" && day != "" && time === "") {
                    if (
                        jQuery.inArray(venue, classList) !== -1 &&
                        jQuery.inArray(age, classList) !== -1 &&
                        jQuery.inArray(day, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue != "" && age != "" && program === "" && day === "" && time != "") {
                    if (
                        jQuery.inArray(venue, classList) !== -1 &&
                        jQuery.inArray(age, classList) !== -1 &&
                        jQuery.inArray(time, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue != "" && age === "" && program != "" && day != "" && time === "") {
                    if (
                        jQuery.inArray(venue, classList) !== -1 &&
                        jQuery.inArray(program, classList) !== -1 &&
                        jQuery.inArray(day, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue != "" && age === "" && program != "" && day === "" && time != "") {
                    if (
                        jQuery.inArray(venue, classList) !== -1 &&
                        jQuery.inArray(program, classList) !== -1 &&
                        jQuery.inArray(time, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue != "" && age === "" && program === "" && day != "" && time != "") {
                    if (
                        jQuery.inArray(venue, classList) !== -1 &&
                        jQuery.inArray(day, classList) !== -1 &&
                        jQuery.inArray(time, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue === "" && age != "" && program != "" && day != "" && time === "") {
                    if (
                        jQuery.inArray(age, classList) !== -1 &&
                        jQuery.inArray(program, classList) !== -1 &&
                        jQuery.inArray(day, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue === "" && age != "" && program != "" && day === "" && time != "") {
                    if (
                        jQuery.inArray(age, classList) !== -1 &&
                        jQuery.inArray(program, classList) !== -1 &&
                        jQuery.inArray(time, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue === "" && age != "" && program === "" && day != "" && time != "") {
                    if (
                        jQuery.inArray(age, classList) !== -1 &&
                        jQuery.inArray(day, classList) !== -1 &&
                        jQuery.inArray(time, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                if (venue === "" && age === "" && program != "" && day != "" && time != "") {
                    if (
                        jQuery.inArray(program, classList) !== -1 &&
                        jQuery.inArray(day, classList) !== -1 &&
                        jQuery.inArray(time, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }

                // If all selectors chosen
                if (venue != "" && age != "" && program != "" && day != "" && time != "") {
                    if (
                        jQuery.inArray(venue, classList) !== -1 &&
                        jQuery.inArray(age, classList) !== -1 &&
                        jQuery.inArray(program, classList) !== -1 &&
                        jQuery.inArray(day, classList) !== -1 &&
                        jQuery.inArray(time, classList) !== -1
                    ) {
                        $(this).removeClass("hide");
                        $(this).addClass("show");
                    }
                }


                // If all selectors not chosen
                if (venue === "" && age === "" && program === "" && day === "" && time === "") {
                    $(this).removeClass("hide");
                    $(this).addClass("show");
                }
            });

            if (!($(".project").hasClass("show"))) {
                $(".empty-msg").css("display", "block");
            }
        });
    });
</script>
<script>
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
</script>
