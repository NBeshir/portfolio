import React from "react";

const AnimatePage = () => {
  return (
    <div>
      {$(window).on("load", function () {
        $(".loader .inner").fadeOut(500, function () {
          $(".loader").fadeOut(750);
        });
        $(".items").isotope({
          filter: "*",
          animationOptions: {
            duration: 1500,
            easing: "linear",
            queue: false,
          },
        });
      })}
    </div>
  );
};
export default AnimatePage;

$(window).on("load", function () {
  $(".loader .inner").fadeOut(500, function () {
    $(".loader").fadeOut(750);
  });
  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });
});
