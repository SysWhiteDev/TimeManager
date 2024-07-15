import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig, Pool } from "@neondatabase/serverless";
import ws from 'ws'

neonConfig.webSocketConstructor = ws
const connectionString = `${process.env.POSTGRES_PRISMA_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)
const prisma = new PrismaClient({ adapter });

export default prisma