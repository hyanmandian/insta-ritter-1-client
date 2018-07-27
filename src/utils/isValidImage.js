const VALID_IMAGE_MIMES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/svg+xml',
];

export default function isValidImage(mime) {
  return VALID_IMAGE_MIMES.includes(mime);
}
