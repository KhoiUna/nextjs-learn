export default function handler(req, res) {
  let count = 0;
  count += 1;
  res.status(200).json({ text: "Hello", count });
}
