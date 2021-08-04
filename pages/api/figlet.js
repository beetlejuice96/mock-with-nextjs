import figletRender from "../../lib/figlet-render";

export default function getFiglet(req, res) {
  if (!req.body.text) {
    return res.status(400).json({ text: "Error: Missing text" });
  }

  res.status(200).json({ text: figletRender(req.body.text) });
}
