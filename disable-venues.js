$("select").on("change", function () {
  var program = $(".program").find(":selected").attr("data-list");

  if (program === "winter-camps") {
    $(".venue option[value=BG], .venue option[value=GL], .venue option[value=HV], .venue option[value=LG], .venue option[value=CP], .venue option[value=KT], .venue option[value=KG], .venue option[value=PF], .venue option[value=SD], .venue option[value=DI], .venue option[value=TI], .venue option[value=PI], .venue option[value=AN], .venue option[value=MO], .venue option[value=SK], .venue option[value=AP], .venue option[value=RB], .venue option[value=ST]").prop("disabled", true);
  } else {
    $(".venue option[value=BG], .venue option[value=GL], .venue option[value=HV], .venue option[value=LG], .venue option[value=CP], .venue option[value=KT], .venue option[value=KG], .venue option[value=PF], .venue option[value=SD], .venue option[value=DI], .venue option[value=TI], .venue option[value=PI], .venue option[value=AN], .venue option[value=MO], .venue option[value=SK], .venue option[value=AP], .venue option[value=RB], .venue option[value=ST]").prop("disabled", false);
  }
});