import * as z from "zod";

const getCategories = async () => {
  const getCat = await fetch("http://localhost:5000/categories", {
    method: "GET",
  });
  const response = await getCat.json();

  return response
};

export const user = z.object({
  name: z.string().min(1, { message: "Necessário  preencher o campo nome" }),
  email: z
    .string()
    .email({ message: "Insira um email válido" })
    .min(1, { message: "Necessário  preencher o email" }),
  phone: z.string().min(11, {
    message: "Necessário  preencher o campo telefone com 11 dígitos",
  }),
  creci: z.string().min(6, {
    message: "Necessário  preencher o campo Creci",
  }),
  creciUF: z.string().min(2, {
    message: "Estado",
  }),
  role: z.enum(["ADMIN", "USER"], {
    errorMap: () => {
      return { message: "Informe o cargo do colaborador" };
    },
  }),
  password: z.string().min(6, {
    message: "Necessário  preencher o campo Senha",
  }),
});
export const houses = z.object({
   
    descript: z.string().min(1, { message: "Campo Obrigatorio" }),
    price: z.string().min(1, { message: "Campo Obrigatorio" }),
    suite:z.string().min(1, { message: "Campo Obrigatorio" }),
    bedrooms: z.string().min(1, { message: "Campo Obrigatorio" }),
    UF:z.string().min(2, { message: "Obrigatorio" }),
    city: z.string().min(1, { message: "Campo Obrigatorio" }),
    address:z.string().min(1, { message: "Campo Obrigatorio" }),
    district: z.string().min(1, { message: "Campo Obrigatorio" }),
    meters:z.string().min(1, { message: "Campo Obrigatorio" }),
    garage:z.string().min(1, { message: "Campo Obrigatorio" }),

    categories: z.string().refine((value) => {
      return value !== '' && value !== null; 
    }, { message: "Selecione uma opção válida" }),
    })
export const login = z.object({
  email:z.string().email({message:"Insira um email válido."}).min(1, { message: "Campo Obrigatorio" }),
  password:z.string().min(6, { message: "Campo Obrigatorio" }),
})
export type Login = z.infer<typeof login>
export type User = z.infer<typeof user>;
export type Houses = z.infer<typeof houses>
/*
  code       String
  descript   String
  price      Float
  bedrooms   String
  UF         String
  city       String
  district   String
  catId      Int
  meters     String
  garage     String
  suite      String
  categories Categories @relation(fields: [catId], references: [id])
  images     String[]
  createAt   DateTime   @default(now())
  updateAt   DateTime?
  User       User?      @relation(fields: [userId], references: [id])
  userId     Int?
  */