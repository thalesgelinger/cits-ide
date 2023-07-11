import fs from 'fs'

export default function handler (req:any, res:any) {
  console.log('aqui')
  fs.writeFileSync('./pages/ide/test.tsx', req.body)

  return res.status(200)
}
