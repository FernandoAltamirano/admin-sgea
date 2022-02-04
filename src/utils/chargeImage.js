export default function chargeImage(image, callback) {
  if (
    image.type === "image/png" ||
    image.type === "image/jpeg" ||
    image.type === "image/jpg"
  ) {
    const file = new FileReader();
    file.readAsDataURL(image);
    file.onload = (ev) => {
      callback({ name: image.name, data: ev.target.result });
    };
  }
}
