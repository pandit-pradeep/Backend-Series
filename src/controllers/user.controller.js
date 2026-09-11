import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(500).json({
    message: "Hello ji my name is Pradeep Pandit",
  });
});

export { registerUser };
