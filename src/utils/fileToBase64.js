export default function fileToBase64(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = ({ target: { result } }) => resolve(result);

    reader.readAsDataURL(file);
  });
}
