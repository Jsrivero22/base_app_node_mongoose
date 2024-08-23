
export class AuthController {
  constructor() {
    this.auth = new Auth();
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await this.auth.login(email, password);
      res.status(200).json(user);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}