export default function handler(req, res) {
  console.log("Incoming request:", req.method, req.query, req.body);
  
  // Simulated response (modify as needed)
  res.status(200).json({
    success: true,
    message: "Fake Stow API response",
    data: {
      encryptedData: "0xdeadbeefcafebabe",
      metadata: {
        owner: "0x1234567890abcdef",
        permissions: "public",
      },
    },
  });
}
