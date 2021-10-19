const movieSampler = require("movie-sampler");
const $ = require("jquery");
var open = require("open");

$("#form").on("submit", async (e) => {
  e.preventDefault();

  const $button = $("#form-button");
  $button.prop("disabled", true);

  const $output = $("#output");
  $output.text("");

  const video = $("#video-input").val();
  const subs = $("#subs-input").val();
  const out = $("#out-input").val();
  const onProcessItem = (sub) =>
    $output.text(`processing item:\n${JSON.stringify(sub, null, 2)}`);
  try {
    await movieSampler({ video, subs, out, onProcessItem });
    $output.text("done");
  } catch (e) {
    console.log(e);
    $output.text(e.message);
  }
  $button.prop("disabled", false);
});

function openMot() {
  open("https://www.mot.studio");
}
