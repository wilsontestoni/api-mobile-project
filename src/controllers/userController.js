// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { getUserByEmail, createUser } from "../services/userServices.js";

// export const create = async (req, res) => {
//   try {
//     const user_type = "normal";
//     const { name, email, password } = req.body;

//     const userExist = await getUserByEmail(email);

//     if (userExist) {
//       return res.status(400).send("Usuário já existe");
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = {
//       name,
//       email,
//       password: hashedPassword,
//       user_type,
//     };

//     const userCreated = await createUser(newUser);

//     if (!userCreated) {
//       res.status(500).send("Não foi possível cadastrar o usuário");
//     }

//     res.status(200).send("Usuário cadastrado com sucesso");
//   } catch (error) {
//     res.status(500).send(`Problema generalizado no servidor interno`);
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await getUserByEmail(email);

//     if (!user) {
//       return res.status(400).send("Usuário não existe!");
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(400).send("Senha inválida");
//     }

//     const token = jwt.sign(
//       { id: user.id, name: user.name, user_type: user.user_type },
//       "mudarAChaveDepois",
//       {
//         expiresIn: "1h",
//       }
//     );

//     res.status(200).send({ auth: true, token: token });
//   } catch (err) {
//     res.status(500).send(`Problema generalizado no servidor interno`);
//   }
// };
