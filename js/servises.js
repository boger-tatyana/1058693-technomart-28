var delivery = document.querySelector(".active-delivery");
var garanty = document.querySelector(".active-garanty");
var credit = document.querySelector(".active-credit");

var deliveryService = document.querySelector(".item-delivery");
var garantyService = document.querySelector(".item-garanty");
var creditService = document.querySelector(".item-credit");

credit.addEventListener("click", function(evt){
    evt.preventDefault();
    creditService.classList.add("service-show");

    garantyService.classList.remove("service-show");

    deliveryService.classList.add("service-close");
});

garanty.addEventListener("click", function(evt){
    evt.preventDefault();
    garantyService.classList.add("service-show");

    deliveryService.classList.add("service-close");

    creditService.classList.remove("service-show");
});

delivery.addEventListener("click", function(evt){
    evt.preventDefault();
    deliveryService.classList.remove("service-close");

    garantyService.classList.remove("service-show");

    creditService.classList.remove("service-show");
});
